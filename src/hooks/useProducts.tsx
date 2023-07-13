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
			image: '',
		},
		cartProducts: [],
		checkoutOpen: false,
		order: [],
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
		const newValue = state.cartProducts.length + 1;
		products.push(product);
		setState({ ...state, shoppingCard: newValue, cartProducts: products, checkoutOpen: true });
	};

	const deleteProductsCard = (id: number) => {
		const productToDeleteIndex = state.cartProducts.findIndex((product) => product.id === id);
		const newProducts = state.cartProducts;
		newProducts.splice(productToDeleteIndex, 1);
		const newValue = state.cartProducts.length;
		setState({ ...state, cartProducts: newProducts, shoppingCard: newValue });
	};
	const checkout = (totalPrice: number) => {
		const orderToAdd = {
			id: crypto.randomUUID(),
			date: new Date(),
			products: state.cartProducts,
			totalProducts: state.cartProducts.length,
			totalPrice,
		};
		const order = [...state.order];
		order.push(orderToAdd);
		setState({ ...state, cartProducts: [], order, shoppingCard: 0 });
	};

	const setStateHandle: Context['setState'] = {
		handleCount,
		openAside,
		showProduct,
		addProductsToCard,
		openChekout,
		deleteProductsCard,
		checkout,
	};
	return { state, setState: setStateHandle };
};

export { useProducts };
