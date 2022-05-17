import { GetStaticPaths } from 'next';
import { createClient } from '../../prismicio';
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import Link from 'next/link';

const Basic = ({ data }: { data: any }) => {
	return (
		<main>
			<ul style={{display: "flex", justifyContent:"center", gap: "1.5em", listStyle: "none", paddingInlineStart:"0"}}>
				<li><Link passHref href={"/veitingahus"}>Veitingahús</Link></li>
				<li><Link passHref href={"/veitingahus/dogurdur"}>Helgardögurður</Link></li>
				<li><Link passHref href={"/veitingahus/hadegismatur"}>Hádegismatur</Link></li>
				<li><Link passHref href={"/veitingahus/veislur"}>Veislur</Link></li>
				<li><Link passHref href={"/veitingahus/matarstefna"}>Matarstefna</Link></li>
				<li><Link passHref href={"/veitingahus/gjafabref"}>Gjafabréf</Link></li>
			</ul>
			<SliceZone slices={data.data.slices} components={components} />
		</main>
	);
};

export async function getStaticProps({
	params,
	previewData,
}: {
	params: any;
	previewData: any;
}) {
	const client = createClient({ previewData }); // sama functionality og í öllum hinum
	const data = await client.getByUID('basic', params.basic);

	return { props: { data } };
}

// * fallback fyrir dýnamískar síður
export async function getStaticPaths () {
    const client = createClient();
    const data = await client.getAllByTag('veitingahus',);

    const paths = data.map((item) => ({
        params: { basic: item.uid },
      }))

	return {
		paths, // ! telur hvaða síður þarf að búa til á build time
		fallback: false, // ! false segir að það eigi að gera 404 ef síðan finnst ekki
	};
};

export default Basic;
