import { PrismicRichText, SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../prismicio";
import { components } from "../slices";

import styles from "../styles/Home.module.css";
import eventStyles from "../styles/Events.module.css";
import { predicate } from "@prismicio/client";

const Home = ({ slices, events }: { slices: any; events: any }) => {
  const today = Date.now();
  return (
    <main>
      <SliceZone slices={slices} components={components} />
      <section style={{ padding: "0 1em" }}>
        <h2>Næstu viðburðir í Hannesarholti</h2>
      </section>
      <section style={{ padding: "1em" }} className={eventStyles.prison}>
		  {events.length < 1 ? (<p>Engir nýjir viðburðir eru á dagskrá</p>) : null}
        {events.map((e: any, i: number) => {
          // * okok ég veit að þetta lítur út eins og mjög mikill spaghetti kóði og það er alveg rétt
          // ? það sem hann gerir er að nota [EVERY] aðferðina til að loopa yfir dagsetningar í viðburðshlut og
          // ? finna þá dagsetningu sem er seinna en dagurinn í dag og birta hana í stað þess að birta bara nýjustu
		  if (i > 3) return;
          let dateObj;
          e.data.dates.every((date: { date: string }) => {
            let temp = new Date(date.date);
            let t = new Date(today);
            if (temp > t) {
              dateObj = temp;
              return false;
            }
            return true;
          });
          if (!dateObj) dateObj = new Date(e.data.dates[0].date);
          const m = dateObj.getDate();
          const d = dateObj.getMonth() + 1;
          const y = dateObj.getFullYear();
          const tH = dateObj.getHours();
          const tM = dateObj.getMinutes();
          return (
            <Link href={`vidburdir/${e.uid}`} passHref key={i}>
              <div className={eventStyles.cell}>
                <img src={e.data.image.cover.url} alt={e.data.image.alt} />
                <div className={eventStyles.cot}>
                  <PrismicRichText field={e.data.title} />
                  <p>{`${m}/${d}/${y} kl. ${tH < 10 ? "0" + tH : tH}:${
                    tM < 10 ? "0" + tM : tM
                  }`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export async function getServerSideProps() {
  const today = Date.now();
  const client = createClient();
  const pageData = await client.getByType("index");
  const events = await client.getAllByType("event", {
    pageSize: 4,
    predicates: [predicate.dateAfter("my.event.dates.date", today)],
    orderings: "my.event.dates.date",
  });

  return { props: { slices: pageData.results[0].data.slices, events } };
}

export default Home;
