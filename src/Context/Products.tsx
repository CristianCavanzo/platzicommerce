import { Products } from '@types';
import { useProducts } from 'hooks/useProducts';
import React, { ReactNode, createContext, useContext } from 'react';
export interface Context {
	state: {
		productOpen: Boolean;
		shoppingCard: number;
		productInfo: Products;
	};
	setState: {
		handleCount: () => void;
		// eslint-disable-next-line no-unused-vars
		openAside: (typeShow: boolean) => void;
		// eslint-disable-next-line no-unused-vars
		showProduct: (product: Products) => void;
	};
}

const ProductsContext = createContext<Context>({
	state: {
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
	},
	setState: {
		handleCount: (): void => {},
		openAside: (): void => {},
		showProduct: (): void => {},
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
