import React, { ReactNode } from 'react';
interface Props {
	children: ReactNode;
	title: string;
}
const Layout = ({ children, title }: Props) => {
	return (
		<div className="mt-20 max-w-screen-lg m-auto flex justify-center flex-col">
			<div className="flex items-center mb-6 w-full font-bold ">
				<h1 className="w-full text-center">{title}</h1>
			</div>
			<div className="flex flex-col  lg:max-w-[75pc] m-auto items-center">{children}</div>;
		</div>
	);
};

export { Layout };
