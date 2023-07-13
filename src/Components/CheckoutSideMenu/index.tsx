import { AsideComponent } from '@components/Generals/Aside';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
import { totalPrice } from 'utils';
import Link from 'next/link';
import { OrderCard } from '@components/Generals/OrderCard';
const CheckoutSideManu = () => {
	const { state, setState } = ProductsConsumer();
	const { openChekout, deleteProductsCard, checkout } = setState;
	const { checkoutOpen, cartProducts } = state;
	const total = totalPrice(cartProducts);
	const handleCheckout = () => {
		checkout(total);
	};
	return (
		<AsideComponent
			title="My order"
			closeFunction={() => {
				openChekout(false);
			}}
			open={checkoutOpen}
			extraData={
				<div>
					<p className="flex items-center justify-between">
						<span>Total: </span>
						<span className="text-bold">{total}</span>
					</p>
					<Link href="/MyOrders/last">
						<button className="w-full bg-black text-white py-2 rounded" onClick={handleCheckout}>
							Checkout
						</button>
					</Link>
				</div>
			}
		>
			<div>
				{cartProducts.map((product) => (
					<OrderCard key={product.id} deleteProductsCard={deleteProductsCard} {...product} />
				))}
			</div>
		</AsideComponent>
	);
};

export { CheckoutSideManu };
