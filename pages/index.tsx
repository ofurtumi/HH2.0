import { PrismicRichText, SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../prismicio";
import { components, Texti, Mynd } from "../slices";

import styles from "../styles/Home.module.css";
import eventStyles from "../styles/Events.module.css";
import { predicate } from "@prismicio/client";
import { FormEvent, useState } from "react";

const Home = ({ slices, events, news }: { slices: any; events: any, news: any }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); 
  const [formLabel, setFormLabel] = useState("Finnst þér mikilvægt að Hannesarholt lifi áfram?");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLabel("Takk kærlega fyrir að senda inn svar, allt hjálpar!")
    setSent(true)

    // * skilgreining á data strúktúr, sjúklega flókin ég veit
    const time = Math.round(Date.now() / 1000)
    const data = {
      time,
      name,
      message,
    };

    // * kall í apann
    // console.log("data --> ", data);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const content = await response.json();
    

    // alert(content.data.tableRange)
    console.log("content --> ", content);
  };

  const today = Date.now();
  return (
    <main>
      {/* // ! þetta sliceZone má setja inn aftur ef það á að taka út heimasíðu formið */}
      <SliceZone slices={slices} components={components} />
      {/* <Texti slice={slices[0]} /> */}
      {/* <section className={styles.garden}>
        <img src={slices[1].primary.image.url} alt={slices[1].primary.image.alt} />
        <form onSubmit={handleSubmit} className={styles.formPrison}>
          <h3>{formLabel}</h3>
          <div className={styles.formCell}>
            <label htmlFor="name">Nafn</label>
            <input
              placeholder="Nafnið þitt"
              value={name}
              type="text"
              name="name"
              id="name"
              disabled={sent}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formCell}>
            <label htmlFor="message">Skilaboð</label>
            <textarea
              placeholder="Svarið þitt"
              value={message}
              name="message"
              id="message"
              disabled={sent}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button disabled={sent} type="submit">Senda svar</button>
        </form>
      </section> */}
      <section style={{ padding: "0 1em" }}>
        <h2>Nýjustu fréttir frá Hannesarholti</h2>
      </section>
      <section style={{ padding: "1em" }} className={eventStyles.prison}>
        {news.length < 1 ? <p>Engir nýjir viðburðir eru á dagskrá</p> : null}
        {news.reverse().map((e: any, i: number) => {
          if (i > 3) return;
          return (
            <Link href={`frettir/${e.uid}`} passHref key={i}>
              <div className={eventStyles.cell}>
                <img src={e.data.image.cover.url} alt={e.data.image.alt} />
                <div className={eventStyles.cot}>
                  <PrismicRichText field={e.data.title} />
                  {/* <p>{`${m}/${d}/${y} kl. ${tH < 10 ? "0" + tH : tH}:${
                    tM < 10 ? "0" + tM : tM
                  }`}</p> */}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <section style={{ padding: "0 1em" }}>
        <h2>Næstu viðburðir í Hannesarholti</h2>
      </section>
      <section style={{ padding: "1em" }} className={eventStyles.prison}>
        {events.length < 1 ? <p>Engir nýjir viðburðir eru á dagskrá</p> : null}
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
            <Link href={`vidburdir/einstakir/${e.uid}`} passHref key={i}>
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

  const news = await client.getAllByType("news", {
    pageSize: 4,
    // predicates: [predicate.dateAfter("my.news.dates.date", today)],
    orderings: "my.news.date",
  });
  return { props: { slices: pageData.results[0].data.slices, events, news } };
}

export default Home;
