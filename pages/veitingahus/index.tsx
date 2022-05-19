import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { components } from "../../slices";

const Veitingahus = ({ data, others }: { data: any; others: any }) => {
  return (
    <main>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5em",
          listStyle: "none",
          paddingInlineStart: "0",
        }}
      >
        {others.map((page: any, i: number) => {
          return (
            <li>
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

export async function getStaticProps() {
  const client = createClient();
  const data = await client.getByUID("basic", "veitingahus");
  const others = await client.getAllByTag("veitingahus", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
  });

  return { props: { data, others } };
}

export default Veitingahus;
