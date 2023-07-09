import type { AppProps } from 'next/app';
import '@styles/global.css';
import { NavBar } from '@components/Generals/NavBar';
import { Fragment } from 'react';
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<NavBar />
			<Component {...pageProps} />
		</Fragment>
	);
}
