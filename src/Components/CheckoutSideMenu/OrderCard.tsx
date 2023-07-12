import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Products } from '@types';
import { Context } from '@context/Products';
interface Props extends Products {
	deleteProductsCard: Context['setState']['deleteProductsCard'];
}

const OrderCard = ({ image, title, price, deleteProductsCard, id }: Props) => {
	const handleDelete = () => {
		deleteProductsCard(id);
	};
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20 relative max-w-[80px]">
					<div className="absolute top-0 left-0 right-0 bottom-0">
						<Image src={image} alt={title} fill className="object-contain" />
					</div>
				</figure>
				<p className="text-sm font-light ">{title}</p>
			</div>
			<div
				className="flex items-center gap-1"
				role="button"
				tabIndex={0}
				onClick={handleDelete}
				onKeyDown={handleDelete}
			>
				<p className="font-lg font-medium">{price}</p>
				<XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
			</div>
		</div>
	);
};

export { OrderCard };
