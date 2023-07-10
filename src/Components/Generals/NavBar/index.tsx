import React from 'react';
import { ItemNavBar } from './ItemNavBar';
import { ProductsConsumer } from '@context/Products';
const NavBar = () => {
	const { state } = ProductsConsumer();
	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 left-0 right-0 py-5 px-8 text-sm font-light shadow-md bg-white">
			<ul className="flex gap-x-4 items-center">
				<ItemNavBar speacialClass="font-bold text-lg" href="/">
					Shopi
				</ItemNavBar>
				<ItemNavBar href="/All">All</ItemNavBar>
				<ItemNavBar href="/Clothes">Clothes</ItemNavBar>
				<ItemNavBar href="/Electronics">Electronics</ItemNavBar>
				<ItemNavBar href="/Furnitures">Furnitures</ItemNavBar>
				<ItemNavBar href="/Toys">Toys</ItemNavBar>
				<ItemNavBar href="/Others">Others</ItemNavBar>
			</ul>
			<ul className="flex gap-x-4 items-center">
				<li>email.com</li>
				<ItemNavBar href="/MyOrders">My orders</ItemNavBar>
				<ItemNavBar href="/MyAccount">My Account</ItemNavBar>
				<ItemNavBar href="">Sign in</ItemNavBar>
				<li> {state.shoppingCard} 🛒</li>
			</ul>
		</nav>
	);
};

export { NavBar };
