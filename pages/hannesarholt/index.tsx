import { asText } from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { Titill } from "../../slices";


const Hannesarholt = ({ data }: { data: any }) => {
  return (
      <main>
          <ul>
              {data.map((page:any, i:number) => {
                  return (
                      <li key={i}><a href={"/hannesarholt/"+page.uid}>{page.data.slices[0].primary.title[0].text}</a></li>
                  )
              })}
              <li><a href="/hannesarholt/_100ar/index.html">100 ára saga Hannesarholts</a></li>
          </ul>
      </main>
  )
};

export async function getStaticProps() {
  const client = createClient(); // sama functionality og í öllum hinum
  const data = await client.getAllByTag("Hannesarholt");

  console.log('data --> ', data)
  return { props: { data } };
}

export default Hannesarholt;
