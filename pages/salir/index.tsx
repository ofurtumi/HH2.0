import { createClient } from "../../prismicio";
import { Mynd } from "../../slices";
import styles from "../../styles/Venues.module.css";

const Salir = ({ data }: { data: any }) => {
  return (
    <main>
      {data.map((salur: any, i: number) => {
        return (
          <a href={"/salir/" + salur.uid} key={i} className={styles.boxes}>
            <Mynd slice={salur.data.slices[2]} />
          </a>
        );
      })}
    </main>
  );
};

export async function getStaticProps() {
  const client = createClient();
  const data = await client.getAllByTag("salir", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return { props: { data } };
}

export default Salir;
