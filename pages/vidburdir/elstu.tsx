import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path'
import styles from "../../styles/Events.module.css";
import sliceStyles from "../../styles/Slices.module.css";

type Vidburdur = {
  id: string;
  title: string;
  start: any;
};

const Elstu = ({ events }: { events: Array<Vidburdur> }) => {
  let lastDate = 0;
  return (
    <main>
      <h1 style={{textAlign: 'center'}}>Eldri viðburðir í Hannesarholti</h1>
      <ul
        style={{ listStyle: "none", paddingInlineStart: "none" }}
        className={sliceStyles.listPrison}
      >
        {events.map((ev, i) => {
          let d = new Date(ev.start * 1000);
          if (d.getFullYear() > 2019) return null
          if (d.getFullYear() !== lastDate) {
            lastDate = d.getFullYear();
            return (
              <>
                <h1 key={i+900}>{d.getFullYear()}</h1>
                <li key={i} className={sliceStyles.listCell}>
                  <p>{ev.title}</p>
                  <span>
                    {d.getDate()}/{d.getMonth()}/{d.getFullYear()}
                  </span>
                </li>
              </>
            );
          }
          return (
            <li key={i} className={sliceStyles.listCell}>
              <p>{ev.title}</p>
              <span>
                {d.getDate()}/{d.getMonth()}/{d.getFullYear()}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={styles.PBPrison}>
        <span className={styles.PBAncient}>
          <Link href={`/vidburdir/${1}`} passHref>
            Nýjustu viðburðir
          </Link>
        </span>
      </div>
    </main>
  );
};

// ? beil á serverside
// const Elstu = ({ events, num }: { events: any, num: number }) => {
// console.log('events --> ', events[0].data)
// return (
//   <main>
//     <SliceZone slices={events[0].data.slices} components={components} />
//     <div className={styles.PBPrison}>
//       <span className={styles.PBNew}><Link href={`/vidburdir/${1}`} passHref>Nýjustu viðburðir</Link></span>
//       <span className={styles.PBOld}><Link href={`/vidburdir/${num - 1}`} passHref>Nýrri viðburðir</Link></span>
//     </div>
//   </main>
// );
// };

// ? beil á serverside rendering, er með öll gögn í json afh ætti ég að færa yfir manually
// export async function getServerSideProps({
//   params,
//   previewData,
// }: {
//   params: any;
//   previewData: any;
// }) {
//   const client = createClient(); // býr til client
//   const numEvents = await client.getByType('event');
//   const events = await client.getAllByTag("yfirlit"); // notar client til að sækja allar upplýsingar, raðar eftir dagsetningu viðburðar, nýjastir efst
//   // todo: bæta við paging? held það þurfi þegar komnir eru yfir 100 viðburðir
//   return { props: { events: events, num: numEvents.total_pages } };
// }

export async function getStaticProps() {
  // const old = await fetch("http://localhost:3000/elstu_vidburdir.json");
  const filePath = path.join(process.cwd(), 'public/elstu_vidburdir.json')
  const old = await fs.readFile(filePath)
  let data = await JSON.parse(old.toString());
  data.map((x: Vidburdur) => {
    let temp = new Date(x.start);
    x.start = Math.floor(temp.getTime() / 1000);
    return x;
  });
  data = data.sort((a: Vidburdur, b: Vidburdur) => b.start - a.start);
  // console.log("data --> ", data);
  return { props: { events: data } };
}

export default Elstu;
