import { Products } from '@types';

export const totalPrice = (products: Products[]) => {
	const total = products.reduce((prev, current) => Number(prev) + Number(current.price), 0);
	return total;
};
