import type { AppProps } from 'next/app';
import '@styles/global.css';
import { NavBar } from '@components/Generals/NavBar';
import { Fragment } from 'react';
import { ProductsProvider } from '@context/Products';
import { CheckoutSideManu } from '@components/CheckoutSideMenu';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<ProductsProvider>
				<NavBar />
				<CheckoutSideManu />
				<Component {...pageProps} />
			</ProductsProvider>
		</Fragment>
	);
}
