import { OrderCard } from '@components/Generals/OrderCard';
import { Layout } from '@components/Generals/Layout';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const MyOrderLast = () => {
	const { state } = ProductsConsumer();
	const { order } = state;
	order.at(-1);
	return (
		<Layout>
			<div className="flex w-80 items-center mb-2  ">
				<Link href="/MyOrders">
					<ChevronLeftIcon className="h-6 w-6 cursor-pointer" />
				</Link>
				<h1 className="w-full text-center">My Orders</h1>
			</div>
			<div className="flex-col flex w-80 gap-y-4">
				{order.at(-1)?.products.map((product) => (
					<Link href={`/myOrders/${product.id}`} key={product.id}>
						<OrderCard {...product} />
					</Link>
				))}
			</div>
		</Layout>
	);
};

export default MyOrderLast;
