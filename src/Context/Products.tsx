import { Products } from '@types';
import { useProducts } from 'hooks/useProducts';
import React, { ReactNode, createContext, useContext } from 'react';
interface Order {
	id: string;
	date: Date;
	products: Products[];
	totalProducts: number;
	totalPrice: number;
}

export interface Context {
	state: {
		productOpen: boolean;
		shoppingCard: number;
		productInfo: Products;
		cartProducts: Products[];
		checkoutOpen: boolean;
		order: Order[];
	};
	setState: {
		handleCount: () => void;
		/* eslint-disable no-unused-vars */
		openAside: (typeShow: boolean) => void;
		openChekout: (typeShow: boolean) => void;
		showProduct: (product: Products) => void;
		addProductsToCard: (product: Products) => void;
		deleteProductsCard: (id: number) => void;
		checkout: (total: number) => void;
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
			image: '',
		},
		cartProducts: [],
		order: [],
	},
	setState: {
		handleCount: () => {},
		openChekout: () => {},
		openAside: () => {},
		showProduct: () => {},
		addProductsToCard: () => {},
		deleteProductsCard: () => {},
		checkout: () => {},
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
