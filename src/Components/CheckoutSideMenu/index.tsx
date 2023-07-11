import { AsideComponent } from '@components/Generals/Aside';
import { OrderCard } from '@components/CheckoutSideMenu/OrderCard';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
const CheckoutSideManu = () => {
	const { state, setState } = ProductsConsumer();
	const { openChekout } = setState;
	const { checkoutOpen, cartProducts } = state;

	return (
		<AsideComponent
			title="My order"
			closeFunction={() => {
				openChekout(false);
			}}
			open={checkoutOpen}
		>
			{cartProducts.map((product) => (
				<OrderCard key={product.id} {...product} />
			))}
		</AsideComponent>
	);
};

export { CheckoutSideManu };
