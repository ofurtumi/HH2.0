import { GetStaticPaths } from 'next';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

const Basic = ({ data }: { data: any }) => {
	return (
		<div>
			<SliceZone slices={data.data.slices} components={components} />
		</div>
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
	const data = await client.getByUID('basic', params.basic);

	return { props: { data } };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};

export default Basic;
