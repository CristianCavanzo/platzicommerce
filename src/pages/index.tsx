import { Layout } from '@components/Generals/Layout';
import { Card } from '@components/pages/home/Card';
import React from 'react';
import { ProductDetail } from '@components/Generals/ProductDetail';
import { ProductsConsumer } from '@context/Products';

const Home = () => {
	const { state, setState } = ProductsConsumer();
	const { products, search } = state;
	const { changeSearch } = setState;
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		changeSearch(value);
		console.log(search);
	};
	return (
		<Layout title="Home">
			<input
				type="text"
				placeholder="Search a product"
				className="rounded-lg border border-black w-80 px-4 py-2 mb-4"
				onInput={handleSearch}
				value={search}
			/>
			<div className="flex gap-4 flex-wrap justify-center ">
				{products.map((product) => (
					<Card key={product.id} {...product} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export default Home;
