import { GetStaticPaths } from "next";
import { createClient } from "../../prismicio";

const News = ({data}:{data:any}) => {
    return (
        <p>ass</p>
    )
}

export async function getStaticProps({
	params,
	previewData,
}: {
	params: any;
	previewData: any;
}) {
	const client = createClient({ previewData }); // sama functionality og í öllum hinum
	const data = await client.getByUID('news', params.news);

	return { props: { data } };
}

// * fallback fyrir dýnamískar síður
export async function getStaticPaths () {
    const client = createClient();
    const data = await client.getAllByType('news');

    const paths = data.map((item) => ({
        params: { news: item.uid },
      }))

	return {
		paths, // ! telur hvaða síður þarf að búa til á build time
		fallback: false, // ! false segir að það eigi að gera 404 ef síðan finnst ekki
	};
};

export default News