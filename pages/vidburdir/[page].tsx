import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../../prismicio";
import styles from "../../styles/Events.module.css";

const Events = ({ data }: { data: any }) => {
  // todo: bæta við að hægt sé að skilgreina á milli eins viðburða með því frekar að bæta við dagsetningum heldur en duplicates af sama
  return (
    <main className={styles.prison}>
      {data.results.map((e: any, i: number) => {
        let dateObj = new Date(e.data.dates[0].date);
        const m = dateObj.getDate();
        const d = dateObj.getMonth() + 1;
        const y = dateObj.getFullYear();
        const tH = dateObj.getHours();
        const tM = dateObj.getMinutes();
        return (
          <Link href={`/vidburdir/einstakir/${e.uid}`} passHref key={i}>
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

      <div className={styles.PBPrison}>
        <span className={styles.PBNew}>{data.prev_page ? (<Link href={`/vidburdir/${data.page - 1}`} passHref>Nýrri viðburðir</Link>) : null}</span>
        <span className={styles.PBOld}>{data.next_page ? (<Link href={`/vidburdir/${data.page + 1}`} passHref>Eldri viðburðir</Link>) : null}</span>
        <span className={styles.PBAncient}>{data.next_page ? (<Link href={`/vidburdir/elstu`} passHref>Elstu viðburðir</Link>) : (<Link href={`/vidburdir/1`} passHref>Nýjustu viðburðir</Link>)}</span>
      </div>
    </main>
  );
};

export async function getServerSideProps({
  params,
  previewData,
}: {
  params: any;
  previewData: any;
}) {
  // ! átt eftir að bæta við röðun stupid
  // * ekki lengur bithc
  const client = createClient(); // býr til client
  const events = await client.getByType("event", {
    orderings: { field: "my.event.dates.date", direction: "desc" }, page: params.page
  }); // notar client til að sækja allar upplýsingar, raðar eftir dagsetningu viðburðar, nýjastir efst
  // todo: bæta við paging? held það þurfi þegar komnir eru yfir 100 viðburðir
  return { props: { data: events } };
}

export default Events;
