import Link from "next/link";
import { createClient } from "../../prismicio";
import styles from "../../styles/Hannesarholt.module.css";

const Hannesarholt = ({ data }: { data: any }) => {
  const hannes = new Array();
  const starfsemi = new Array();
  const saga = new Array();
  const annad = new Array();

  data.map((page: any) => {
    if (page.tags.length < 2) {
      annad.push(page);
    } else {
      switch (page.tags[1]) {
        case "Starfsemi":
          starfsemi.push(page);
          break;
        case "Saga":
          saga.push(page);
          break;
        case "Hannes Hafstein":
          hannes.push(page);
          break;
        default:
          annad.push(page);
          break;
      }
    }
  });

  return (
    <main className={styles.prison}>
      <h1>Hannes Hafstein</h1>
      <ul>
        {hannes.map((page: any, i: number) => {
          return (
            <li key={i}>
              <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );
        })}
      </ul>
      <h1>Saga</h1>
      <ul>
        <li>
          <Link href="/hannesarholt/_100ar/index.html">
            100 ára saga Hannesarholts
          </Link>
        </li>
        {saga.map((page: any, i: number) => {
          return (
            <li key={i}>
              <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );
        })}
      </ul>
      <h1>Starfsemi</h1>
      <ul>
        {starfsemi.map((page: any, i: number) => {
          return (
            <li key={i}>
              <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );
        })}
      </ul>
      {annad.length > 0 ? <h1>Hannesarholt</h1> : null}
      <ul>
        {annad.map((page: any, i: number) => {
            return (
              <li key={i}>
                <a href={"/hannesarholt/" + page.uid}>
                  {page.data.slices[0].primary.title[0].text}
                </a>
              </li>
            );
        })}
      </ul>
    </main>
  );
};

export async function getStaticProps() {
  const client = createClient(); // sama functionality og í öllum hinum
  const data = await client.getAllByTag("Hannesarholt");

  return { props: { data } };
}

export default Hannesarholt;
