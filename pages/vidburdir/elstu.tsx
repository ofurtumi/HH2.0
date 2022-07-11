import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import styles from "../../styles/Events.module.css"
const Elstu = ({ events, num }: { events: any, num: number }) => {
  // console.log('events --> ', events[0].data)
  return (
    <main>
      <SliceZone slices={events[0].data.slices} components={components} />
      <div className={styles.PBPrison}>
        <span className={styles.PBNew}><Link href={`/vidburdir/${1}`} passHref>Nýjustu viðburðir</Link></span>
        <span className={styles.PBOld}><Link href={`/vidburdir/${num - 1}`} passHref>Nýrri viðburðir</Link></span>
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
  const client = createClient(); // býr til client
  const numEvents = await client.getByType('event');
  const events = await client.getAllByTag("yfirlit"); // notar client til að sækja allar upplýsingar, raðar eftir dagsetningu viðburðar, nýjastir efst
  // todo: bæta við paging? held það þurfi þegar komnir eru yfir 100 viðburðir
  return { props: { events: events, num: numEvents.total_pages } };
}

export default Elstu;
