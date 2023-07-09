import React from 'react';

const Layout = ({ children }) => {
	return <div className="flex flex-col mt-20 lg:max-w-[75pc] m-auto items-center">{children}</div>;
};

export { Layout };
