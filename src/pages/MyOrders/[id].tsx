import { Layout } from '@components/Generals/Layout';
import { OrderCard } from '@components/Generals/OrderCard';
import { ProductsConsumer } from '@context/Products';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const MyOrderId = () => {
	const { query } = useRouter();
	const id = query.id;
	const { state } = ProductsConsumer();
	const { order } = state;
	const actual = order.find((order) => order.id === id);
	return (
		<Layout>
			<div className="flex w-80 items-center mb-2  ">
				<Link href="/MyOrders">
					<ChevronLeftIcon className="h-6 w-6 cursor-pointer" />
				</Link>
				<h1 className="w-full text-center">My Orders</h1>
			</div>
			<div className="flex-col flex w-80 gap-y-4">
				{actual?.products.map((product) => (
					<OrderCard key={product.id} {...product} />
				))}
			</div>
		</Layout>
	);
};

export default MyOrderId;
