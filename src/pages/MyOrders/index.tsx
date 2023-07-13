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
		<div className="flex justify-between items-center mb-3 border border-black">
			<p>
				<span>{date.toLocaleDateString()}</span>
				<span>$ {totalPrice.toFixed(2)}</span>
				<span>Total: {totalProducts}</span>
			</p>
		</div>
	);
};

const MyOrders = () => {
	const { state } = ProductsConsumer();
	const { order } = state;
	return (
		<Layout>
			<div className="flex w-80 items-center  ">
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
