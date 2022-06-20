import { PrismicRichText } from "@prismicio/react";
import { GetStaticPaths } from "next";
import Link from "next/link";
import { createClient } from "../../prismicio";
import styles from "../../styles/Events.module.css";

const Events = ({ data }: { data: any }) => {
  // todo: bæta við að hægt sé að skilgreina á milli eins viðburða með því frekar að bæta við dagsetningum heldur en duplicates af sama
  return (
    <main className={styles.prison}>
      {data.map((e: any, i: number) => {
        let dateObj = new Date(e.data.dates[0].date);
        const m = dateObj.getDate();
        const d = dateObj.getMonth() + 1;
        const y = dateObj.getFullYear();
        const tH = dateObj.getHours();
        const tM = dateObj.getMinutes();
        return (
          <Link href={`/vidburdir/${e.uid}`} passHref key={i}>
            <div className={styles.cell}>
              <img src={e.data.image.cover.url} alt={e.data.image.alt} />
              <div className={styles.cot}>
                <PrismicRichText field={e.data.title} />
                <p>{`${m}/${d}/${y} kl. ${tH < 10 ? "0" + tH : tH}:${
                  tM < 10 ? "0" + tM : tM
                }`}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export async function getServerSideProps() {
  // ! átt eftir að bæta við röðun stupid
  // * ekki lengur bithc
  const client = createClient(); // býr til client
  const events = await client.getAllByType("event", {
    orderings: { field: "my.event.dates.date", direction: "desc" },
  }); // notar client til að sækja allar upplýsingar, raðar eftir dagsetningu viðburðar, nýjastir efst
  // todo: bæta við paging? held það þurfi þegar komnir eru yfir 100 viðburðir
  return { props: { data: events } };
}

export default Events;
