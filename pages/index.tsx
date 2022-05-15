import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices';

import styles from '../styles/Home.module.css';

const Home = ({ slices }: { slices: any }) => {
	return (
		<main>
			<SliceZone slices={slices} components={components} />
		</main>
	);
};

export async function getStaticProps({ params }: { params: any }) {
	const client = createClient();
	const pageData = await client.getByType('index');
	return { props: { slices: pageData.results[0].data.slices } };
}

export default Home;
