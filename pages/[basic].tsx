import { GetStaticPaths } from 'next';
import { createClient } from '../prismicio';
import Titill from '../slices/Titill/index.js';
import Texti from '../slices/Texti/index.js';
import Mynd from '../slices/Mynd/index.js';

const Basic = ({ data }: { data: any }) => {
	return (
		<div>
			{/* {console.log('data --> ', data)} */}
			{data.data.slices.map((slice: any, i: number) => {
                console.log('slice   --> ', slice )
				switch (slice.slice_type) {
					case 'titill':
						return <Titill slice={slice} />;
					case 'texti':
						return <Texti slice={slice} />;
					case 'mynd':
						return <Mynd slice={slice} />;
				}
			})}
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

	console.log('data --> ', data);
	return { props: { data } };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};

export default Basic;
