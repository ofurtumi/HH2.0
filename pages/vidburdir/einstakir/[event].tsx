import { GetStaticPaths } from "next";
import { createClient } from "../../../prismicio.js";
import { HHEvent } from "../../../types.js";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import styles from "../../../styles/Event.module.css";

const Test = ({ data }: { data: any }) => {
  return (
    <main className={styles.holder}>
      <PrismicRichText field={data.title} />
      <img
        src={data.image.banner.url}
        alt={data.image.alt ?? "hér gleymdist að setja alt texta :/"}
      />
      <div className={styles.ticketsAndTime}>
        <div style={!data.link.url ? {gridColumn: "span 2"} : {gridColumn: "1"}}>
          <h2>{data.dates.length > 1 ? "Dagsetningar:" : "Dagsetning:"}</h2>
          <ul className={styles.times}>
            {data.dates.map(({ date }: { date: string }, i: number) => {
              let dateObj = new Date(date);
              const m = dateObj.getDate();
              const d = dateObj.getMonth() + 1;
              const y = dateObj.getFullYear();
              const tH = dateObj.getHours();
              const tM = dateObj.getMinutes();
              return (
                <li key={i}>{`${m}/${d}/${y} kl. 
            ${tH < 10 ? "0" + tH : tH}:${tM < 10 ? "0" + tM : tM}`}</li>
              );
            })}
          </ul>
        </div>
        <PrismicLink
          field={data.link}
          target="_blank"
          className={styles.ticket}
        >
          Kaupa miða!
        </PrismicLink>
      </div>
      <PrismicRichText field={data.text} />
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
  const client = createClient({ previewData }); // býr til client til að sækja gögnin
  const event = await client.getByUID("event", params.event); // nær í gögn með UID það sama og slóðin
  return { props: { data: event.data } }; // skilar innri gögnum sem sótt voru, þarf ekki metadatað
}

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };

export default Test;
