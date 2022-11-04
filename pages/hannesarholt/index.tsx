import Link from "next/link";
import { createClient } from "../../prismicio";
import { Mynd } from "../../slices";
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

  // let grundarstigur = {
  //   "variation": "myndMedTextaOgLink"
  // }

  return (
    <main className={styles.prison}>
      <ul className={styles.easeOfMenu}>
        <li>
          <a href={"/hannesarholt#hannes"}>Hannes Hafstein</a>
        </li>
        <li>
          <a href={"/hannesarholt#saga"}>Saga</a>
        </li>
        <li>
          <a href={"/hannesarholt#starfsemi"}>Starfsemi</a>
        </li>
      </ul>
      <h1 id="hannes">Hannes Hafstein</h1>
      {/* <Mynd slice={data.page}></Mynd> */}
      <ul>
        {hannes.map((page: any, i: number) => {
          if (page.data.slices1[0]) {
            // console.log('page.data.slices1[0] --> ', page.data.slices1[0])
            return <Mynd slice={page.data.slices1[0]} key={i} />;
          } else {
            return (
              <li key={i}>
                <a href={"/hannesarholt/" + page.uid}>
                  {page.data.slices[0].primary.title[0].text}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <h1 id="saga">Saga</h1>
      <ul>
        {saga.map((page: any, i: number) => {
          if (page.data.slices1[0]) {
            // console.log('page.data.slices1[0] --> ', page.data.slices1[0])
            return <Mynd slice={page.data.slices1[0]} key={i} />;
          } else {return (
            <li key={i}>
              <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );}
        })}
      </ul>
      <h1 id="starfsemi">Starfsemi</h1>
      <ul>
        {starfsemi.map((page: any, i: number) => {
          if (page.data.slices1[0]) {
            return <Mynd slice={page.data.slices1[0]} key={i} />;
          } else {
          return (
            <li key={i}>
              <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );
        }})}
      </ul>
      {annad.length > 0 ? <h1>Hannesarholt</h1> : null}
      <ul>
        {annad.map((page: any, i: number) => {
          if (page.data.slices1[0]) {
            return <Mynd slice={page.data.slices1[0]} key={i} />;
          } else {return (
            <li key={i}>
             <a href={"/hannesarholt/" + page.uid}>
                {page.data.slices[0].primary.title[0].text}
              </a>
            </li>
          );
        }})}
      </ul>
    </main>
  );
};

export async function getServerSideProps() {
  const client = createClient(); // sama functionality og í öllum hinum
  const data = await client.getAllByTag("Hannesarholt");

  // console.log("data --> ", data);

  return { props: { data } };
}

export default Hannesarholt;
