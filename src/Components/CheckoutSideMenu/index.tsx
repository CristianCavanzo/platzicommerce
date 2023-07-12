import { AsideComponent } from '@components/Generals/Aside';
import { OrderCard } from '@components/CheckoutSideMenu/OrderCard';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
const CheckoutSideManu = () => {
	const { state, setState } = ProductsConsumer();
	const { openChekout, deleteProductsCard } = setState;
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
				<OrderCard key={product.id} deleteProductsCard={deleteProductsCard} {...product} />
			))}
		</AsideComponent>
	);
};

export { CheckoutSideManu };
