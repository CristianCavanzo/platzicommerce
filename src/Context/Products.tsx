import { Products } from '@types';
import { useProducts } from 'hooks/useProducts';
import React, { ReactNode, createContext, useContext } from 'react';
export interface Context {
	state: {
		productOpen: Boolean;
		shoppingCard: number;
		productInfo: Products;
		cartProducts: Products[];
		checkoutOpen: Boolean;
	};
	setState: {
		handleCount: () => void;
		/* eslint-disable no-unused-vars */
		openAside: (typeShow: boolean) => void;
		openChekout: (typeShow: boolean) => void;
		showProduct: (product: Products) => void;
		addProductsToCard: (product: Products) => void;
		/* eslint-enable no-unused-vars */
	};
}

const ProductsContext = createContext<Context>({
	state: {
		shoppingCard: 0,
		productOpen: false,
		checkoutOpen: false,
		productInfo: {
			id: 0,
			title: '',
			price: 0,
			description: '',
			category: undefined,
			images: [],
		},
		cartProducts: [],
	},
	setState: {
		handleCount: () => {},
		openChekout: () => {},
		openAside: () => {},
		showProduct: () => {},
		addProductsToCard: () => {},
	},
});

interface PropsProvider {
	children: ReactNode;
}
const ProductsProvider = ({ children }: PropsProvider) => {
	const { state, setState } = useProducts();
	return (
		<ProductsContext.Provider value={{ state, setState }}>{children}</ProductsContext.Provider>
	);
};

const ProductsConsumer = () => useContext(ProductsContext);

export { ProductsProvider, ProductsConsumer };
