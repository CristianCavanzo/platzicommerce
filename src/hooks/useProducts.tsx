import { Context } from '@context/Products';
import { Products } from '@types';
import { useState } from 'react';

const useProducts = (): Context => {
	const [state, setState] = useState<Context['state']>({
		shoppingCard: 0,
		productOpen: false,
		productInfo: {
			id: 0,
			title: '',
			price: 0,
			description: '',
			category: undefined,
			images: [],
		},
		cartProducts: [],
		checkoutOpen: false,
	});

	const handleCount = () => {
		const newValue = state.shoppingCard + 1;
		setState({ ...state, shoppingCard: newValue });
	};

	const openAside = (type: boolean) => {
		setState({ ...state, productOpen: type });
	};

	const openChekout = (type: boolean) => {
		setState({ ...state, checkoutOpen: type });
	};

	const showProduct = (product: Products) => {
		setState({ ...state, productInfo: product, productOpen: true });
	};

	const addProductsToCard = (product: Products) => {
		const products = state.cartProducts;
		const newValue = state.shoppingCard + 1;
		products.push(product);
		setState({ ...state, shoppingCard: newValue, cartProducts: products, checkoutOpen: true });
	};

	const setStateHandle: Context['setState'] = {
		handleCount,
		openAside,
		showProduct,
		addProductsToCard,
		openChekout,
	};
	return { state, setState: setStateHandle };
};

export { useProducts };
