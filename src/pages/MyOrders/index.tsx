import React from 'react';
import { Layout } from '@components/Generals/Layout';
import { OrdersCard } from '@components/Generals/OrdersCards';
import { ProductsConsumer } from '@context/Products';

const MyOrders = () => {
	const { state } = ProductsConsumer();
	const { order } = state;
	return (
		<Layout>
			<div className="flex w-80 items-center  ">
				<h1 className="w-full text-center">My Orders</h1>
			</div>
			{order.map((order) => (
				<OrdersCard
					key={order.id}
					totalPrice={order.totalPrice}
					totalProducts={order.totalProducts}
					date={order.date}
				/>
			))}
		</Layout>
	);
};

export default MyOrders;
