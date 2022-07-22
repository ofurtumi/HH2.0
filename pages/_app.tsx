import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio.js';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Head><title>Hannesarholt</title></Head>
			<PrismicProvider
				linkResolver={linkResolver}
				internalLinkComponent={({ href, children, ...props }) => (
					<Link href={href}>
						<a {...props}>{children}</a>
					</Link>
				)}
			>
				<PrismicPreview repositoryName={repositoryName}>
					<Component {...pageProps} />
				</PrismicPreview>
			</PrismicProvider>
			<Footer />
		</>
	);
}

export default MyApp;
