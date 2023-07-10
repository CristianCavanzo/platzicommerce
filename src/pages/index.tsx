import { Layout } from '@components/Generals/Layout';
import { Card } from '@components/pages/home/Card';
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import { Products } from '@types';
import { ProductDetail } from '@components/Generals/ProductDetail';

export const getServerSideProps: GetServerSideProps<{ products: Products[] }> = async () => {
	try {
		const { data: products } = await axios<Products[]>({
			url: 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10',
		});
		return { props: { products } };
	} catch (error) {
		return { notFound: true };
	}
};

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<Layout>
			<div>Home</div>
			<div className="flex gap-4 flex-wrap justify-center">
				{products.map((product) => (
					<Card key={product.id} {...product} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export default Home;
