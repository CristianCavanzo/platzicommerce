import React from 'react';
import { Layout } from '@components/Generals/Layout';
import { ProductsConsumer } from '@context/Products';
import Link from 'next/link';

interface PropsOrdersCard {
	totalPrice: number;
	totalProducts: number;
	date: Date;
}
const OrdersCard = ({ totalPrice, totalProducts, date }: PropsOrdersCard) => {
	return (
		<div className="flex justify-between items-center border border-black w-80 p-4 gap-x-4 mb-4 rounded-xl">
			<div className="flex justify-between w-full items-center">
				<p className="flex gap-x-2 flex-col">
					<span className="text-ligth">{date.toLocaleDateString()}</span>
					<span className="text-ligth">{totalProducts} articles</span>
				</p>
				<span className="font-bold text-2xl">$ {totalPrice.toFixed(2)}</span>
			</div>
		</div>
	);
};

const MyOrders = () => {
	const { state } = ProductsConsumer();
	const { order } = state;
	return (
		<Layout>
			<div className="flex w-80 items-center mb-6  ">
				<h1 className="w-full text-center">My Orders</h1>
			</div>
			{order.map((order) => (
				<Link href={`/MyOrders/${order.id}`} key={order.id}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
						date={order.date}
					/>
				</Link>
			))}
		</Layout>
	);
};

export default MyOrders;
