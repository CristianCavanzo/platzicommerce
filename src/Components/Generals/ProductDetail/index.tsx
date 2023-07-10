import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ProductsConsumer } from '@context/Products';
import Image from 'next/image';

const ProductDetail = () => {
	const {
		state,
		setState: { openAside: showProduct },
	} = ProductsConsumer();
	const productInfo = state.productInfo;
	return (
		<aside
			className={`${
				!state.productOpen && 'hidden'
			} w-[300px] flex flex-col rounded-xl bg-white fixed right-8 border border-black bottom-4 top-20 max-h-screen overflow-y-auto p-4 z-20`}
		>
			<div className="flex justify-between items-center">
				<h2 className="font-medium text-xl">Detail</h2>
				<button onClick={() => showProduct(false)}>
					<XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
				</button>
			</div>
			<div className="h-full">
				<div className="relative w-full h-1/3">
					<Image
						fill
						src={productInfo.images[0]}
						className="object-cover rounded-xl"
						quality={100}
						alt={productInfo.title}
					/>
				</div>
				<p className="flex flex-col pt-4">
					<span className="font-medium text-2xl">{productInfo.price}</span>
					<span className="font-medium text-md">{productInfo.title}</span>
					<span className="text-sm">{productInfo.description}</span>
				</p>
			</div>
		</aside>
	);
};

export { ProductDetail };
