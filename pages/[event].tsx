import { GetStaticPaths } from "next";
import { createClient } from "../prismicio.js";
import { HHEvent } from "../types.js";

const Test = ({ event }: { event: any }) => {
  return (
    <>
      <h1>e</h1>
      <p>{event.data.link.url}</p>
    </>
  );
};

export async function getStaticProps({
  params,
  previewData,
}: {
  params: any;
  previewData: any;
}) {
  const client = createClient({ previewData });

  const event = await client.getByUID("event", params.event);
  console.log("event --> ", event);

  return { props: { event } };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default Test;
