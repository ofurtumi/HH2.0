import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { components } from "../../slices";

const Heimili = ({ data }: { data: any }) => {
  return (
      <main>
          {/* <ul>
              <li><Link href={"/heimili/h17"}>Heimsmarkmiðin 17</Link></li>
              <li><Link href={"/heimili/kennsla"}>Kennsla</Link></li>
              <li><Link href={"/heimili/upplysingar"}>Upplýsingar</Link></li>
          </ul> */}
          <SliceZone slices={data.data.slices} components={components}/>
      </main>
  );
};

export async function getServerSideProps() {
  const client = createClient();
  const data = await client.getByUID("basic", "heimsmarkmid-index");

  return { props: { data } };
}

export default Heimili;
