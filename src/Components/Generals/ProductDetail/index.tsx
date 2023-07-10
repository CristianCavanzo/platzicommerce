import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
	return (
		<aside className="w-[300px] flex flex-col rounded-xl bg-white fixed right-8 border border-black bottom-4 top-20 max-h-screen overflow-y-auto p-4">
			<div className="flex justify-between items-center">
				<h2 className="font-medium text-xl">Detail</h2>
				<div>
					<XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
				</div>
			</div>
		</aside>
	);
};

export { ProductDetail };
