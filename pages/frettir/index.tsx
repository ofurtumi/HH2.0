import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Link from "next/link";
import styles from "../../styles/News.module.css";

const AllNews = ({ data }: { data: any }) => {
  return (
    <main className={styles.prison}>
      {data ? (
        data.map((news: any, i: number) => {
          return (
            <Link href={"/frettir/" + news.uid} key={i} passHref>
              <div className={styles.cell}>
                <img
                  src={news.data.image.cover.url}
                  alt={news.data.image.alt}
                />
                <div className={styles.cot}>
                  <PrismicRichText field={news.data.title} />
                  <p>{news.data.date}</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>engar fréttir til staðar</h1>
      )}
    </main>
  );
};

export async function getServerSideProps() {
  const client = createClient({}); // sama functionality og í öllum hinum
  const data = await client.getAllByType("news", {
    orderings: { field: "my.news.date", direction: "desc" },
  });

  return { props: { data } };
}

export default AllNews;
