// import { GetStaticPaths } from "next";
import { createClient } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import styles from "../../styles/Diner.module.css"
import Link from "next/link";

const Basic = ({ data, others }: { data: any; others: any }) => {
  return (
    <main>
      <button className={styles.navButton}>Meiri upplýsingar</button>
      <ul className={styles.navPrison}>
        {others.map((page: any, i: number) => {
          return (
            <li key={i}>
              <Link passHref href={"/veitingahus/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </Link>
            </li>
          );
        })}
      </ul>
      <SliceZone slices={data.data.slices} components={components} />
    </main>
  );
};

export async function getStaticProps({
  params,
  previewData,
}: {
  params: any;
  previewData: any;
}) {
  const client = createClient({ previewData }); // sama functionality og í öllum hinum
  const data = await client.getByUID("basic", params.basic);
  const others = await client.getAllByTag("veitingahus", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
  });

  return { props: { data, others } };
}

// * fallback fyrir dýnamískar síður
export async function getStaticPaths() {
  const client = createClient();
  const data = await client.getAllByTag("veitingahus");

  const paths = data.map((item) => ({
    params: { basic: item.uid },
  }));

  return {
    paths, // ! telur hvaða síður þarf að búa til á build time
    fallback: false, // ! false segir að það eigi að gera 404 ef síðan finnst ekki
  };
}

export default Basic;
