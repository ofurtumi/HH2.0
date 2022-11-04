import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";

const Hannesarholt = ({ data }: { data: any }) => {
    return (
        <main>
            <SliceZone slices={data.data.slices} components={components} /> 
        </main>
    )
};

export async function getStaticProps({
	params,
	previewData,
}: {
	params: any;
	previewData: any;
}) {
	const client = createClient({ previewData }); // sama functionality og í öllum hinum
	const data = await client.getByUID('basic', params.hannesarholt);

	return { props: { data } };
}

// * fallback fyrir dýnamískar síður
export async function getStaticPaths () {
    const client = createClient();
    const data = await client.getAllByTag('Hannesarholt',);

    const paths = data.map((item) => ({
        params: { hannesarholt: item.uid },
      }))

	return {
		paths, // ! telur hvaða síður þarf að búa til á build time
		fallback: false, // ! false segir að það eigi að gera 404 ef síðan finnst ekki
	};
};

export default Hannesarholt;
