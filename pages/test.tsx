import { GetStaticPaths } from 'next';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

const Basic = ({ data }: { data: any }) => {
	return (
		<main>
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
	const data = await client.getByUID('basic', 'test');

	return { props: { data } };
}

export default Basic;
