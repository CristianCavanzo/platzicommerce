import { ProductsConsumer } from '@context/Products';
import { Products } from '@types';
import Image from 'next/image';
import React, { KeyboardEvent, MouseEvent } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
const Card = ({ category, price, image, title, description, id }: Products) => {
	const {
		setState: { showProduct, addProductsToCard },
	} = ProductsConsumer();
	const product = {
		category,
		price,
		image,
		title,
		id,
		description,
	};
	const handleProduct = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
		event.stopPropagation();
		showProduct(product);
	};

	return (
		<div
			className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md"
			onClick={(event) => handleProduct(event)}
			onKeyDown={(event) => handleProduct(event)}
			role="button"
			tabIndex={0}
		>
			<figure className="relative mb-2 w-full h-3/4">
				<button
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 z-[4]"
					onClick={(event) => {
						event.stopPropagation();
						addProductsToCard(product);
					}}
				>
					<PlusIcon className="h-4 w-4" />
				</button>
				<Image fill alt={title} src={image} className="object-cover" quality={100} />
				<span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-xs  m-2 px-4 py-0.5">
					{category}
				</span>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{title}</span>
				<span className="text-lg font-medium">{price}</span>
			</p>
		</div>
	);
};

export { Card };
