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
	});

	const handleCount = () => {
		const newValue = state.shoppingCard + 1;
		setState({ ...state, shoppingCard: newValue });
	};

	const openAside = (type: boolean) => {
		setState({ ...state, productOpen: type });
	};

	const showProduct = (product: Products) => {
		setState({ ...state, productInfo: product, productOpen: true });
	};

	const setStateHandle: Context['setState'] = {
		handleCount,
		openAside,
		showProduct,
	};
	return { state, setState: setStateHandle };
};

export { useProducts };
