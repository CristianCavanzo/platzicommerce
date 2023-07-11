import { AsideComponent } from '@components/Generals/Aside';
import { ProductsConsumer } from '@context/Products';
import React from 'react';
const CheckoutSideManu = () => {
	const { state, setState } = ProductsConsumer();
	const { openChekout } = setState;
	const { checkoutOpen } = state;

	return (
		<AsideComponent
			title="My order"
			closeFunction={() => {
				openChekout(false);
			}}
			open={checkoutOpen}
		/>
	);
};

export { CheckoutSideManu };
