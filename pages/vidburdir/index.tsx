import { PrismicRichText } from '@prismicio/react';
import { GetStaticPaths } from 'next';
import Link from 'next/link';
import { createClient } from '../../prismicio';
import styles from '../../styles/Events.module.css';

const Events = ({ data }: { data: any }) => {
	return (
		<main className={styles.prison}>
			{data.map((e: any, i: number) => {
				return (
					<div className={styles.cell} key={i}>
						<Link href={`vidburdir/${e.uid}`}>
							<div>
								<PrismicRichText field={e.data.title} />
								<img
									src={e.data.image.url}
									alt={e.data.image.alt}
								/>
							</div>
						</Link>
					</div>
				);
			})}
		</main>
	);
};

export async function getStaticProps({ params }: { params: any }) {
	const client = createClient(); // býr til client
	const events = await client.getAllByType('event'); // notar client til að sækja allar upplýsingar
	// todo: bæta við paging? held það þurfi þegar komnir eru yfir 100 viðburðir
	return { props: { data: events } };
}

export default Events;
