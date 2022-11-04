import Link from "next/link";
import { createClient } from "../../prismicio";
import { Mynd } from "../../slices";
import styles from "../../styles/Venues.module.css";
import navStyles from "../../styles/Diner.module.css"

const Salir = ({ data }: { data: any }) => {
  return (
    <main>
      <ul className={navStyles.navPrison}>
        <li>
          <Link passHref href="salir/veitingastofur">Um Veitingastofur</Link>
        </li>
        <li>
          <Link passHref href="salir/badstofa">Um Baðstofuna</Link>
        </li>
        <li>
          <Link passHref href="salir/arinstofa">Um Arinstofu</Link>
        </li>
        <li>
          <Link passHref href="salir/hvita">Um Hvíta Herbergið</Link>
        </li>
        <li>
          <Link passHref href="salir/rauda">Um Rauða Herbergið</Link>
        </li>
         <li>
          <Link passHref href="salir/hljodberg">Um Hljóðberg</Link>
        </li>
      </ul>
      {data.map((salur: any, i: number) => {
        return (
          <Mynd slice={salur.data.slices1[0]} key={i} />
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
