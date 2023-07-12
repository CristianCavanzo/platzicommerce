import { AsideComponent } from '@components/Generals/Aside';
import { OrderCard } from '@components/CheckoutSideMenu/OrderCard';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
import { totalPrice } from 'utils';
const CheckoutSideManu = () => {
	const { state, setState } = ProductsConsumer();
	const { openChekout, deleteProductsCard } = setState;
	const { checkoutOpen, cartProducts } = state;
	const total = totalPrice(cartProducts);
	return (
		<AsideComponent
			title="My order"
			closeFunction={() => {
				openChekout(false);
			}}
			open={checkoutOpen}
			extraData={
				<p className="flex items-center justify-between">
					<span>Total: </span>
					<span>{total}</span>
				</p>
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
