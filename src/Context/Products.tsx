import { useProducts } from 'hooks/useProducts';
import React, { ReactNode, createContext, useContext } from 'react';

interface Context {
	state: {
		shoppingCard: number;
	};
	setState: {
		handleCount: () => void;
	};
}

const ProductsContext = createContext<Context>({
	state: {
		shoppingCard: 0,
	},
	setState: {
		handleCount: (): void => {},
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
