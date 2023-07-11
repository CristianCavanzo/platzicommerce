import React from 'react';
import Image from 'next/image';
import { ProductsConsumer } from '@context/Products';
import { AsideComponent } from '@components/Generals/Aside';

const ProductDetail = () => {
	const {
		state,
		setState: { openAside: showProduct },
	} = ProductsConsumer();
	const productInfo = state.productInfo;

	return (
		<AsideComponent
			open={state.productOpen}
			title="Detail"
			closeFunction={() => showProduct(false)}
		>
			<div className="relative w-full h-1/3">
				{productInfo.image && (
					<Image
						fill
						src={productInfo.image}
						className="object-cover rounded-xl"
						quality={100}
						alt={productInfo.title}
					/>
				)}
			</div>
			<p className="flex flex-col pt-4">
				<span className="font-medium text-2xl">{productInfo.price}</span>
				<span className="font-medium text-md">{productInfo.title}</span>
				<span className="text-sm">{productInfo.description}</span>
			</p>
		</AsideComponent>
	);
};

export { ProductDetail };
