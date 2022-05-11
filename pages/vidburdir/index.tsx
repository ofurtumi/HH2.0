import { PrismicRichText } from "@prismicio/react";
import { GetStaticPaths } from "next";
import Link from "next/link";
import { createClient } from "../../prismicio";
import styles from "../../styles/Events.module.css";

const Events = ({ data }: { data: any }) => {
  return (
    <div className={styles.prison}>
      {data.map((e: any, i: number) => {
        return (
          <div className={styles.cell} key={i}>
            <Link href={`vidburdir/${e.uid}`}>
              <div>
                <PrismicRichText field={e.data.title} />
                <img src={e.data.image.url} alt={e.data.image.alt} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps({
  params,
}: {
  params: any;
  previewData: any;
}) {
  const client = createClient();

  const events = await client.getAllByType("event");

  return { props: { data: events } };
}

//   export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//     return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: "blocking", //indicates the type of fallback
//     };
//   };

export default Events;
