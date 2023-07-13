import React from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
	totalPrice: number;
	totalProducts: number;
	date: Date;
}
const OrdersCard = ({ totalPrice, totalProducts, date }: Props) => {
	return (
		<div className="flex justify-between items-center mb-3 border border-black">
			<p>
				<span>{date.toString()}</span>
				<span>$ {totalPrice}</span>
				<span>Total: {totalProducts}</span>
			</p>
		</div>
	);
};

export { OrdersCard };
