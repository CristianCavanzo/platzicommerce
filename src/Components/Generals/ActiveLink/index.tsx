import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
interface Props {
	children: ReactNode;
	href: string;
}
const ActiveLink = ({ children, href }: Props) => {
	const [state, setState] = useState(false);
	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === href) {
			setState(true);
		} else {
			setState(false);
		}
	}, [pathname]);

	return (
		<Link className={`${state && 'underline'}`} href={href}>
			{children}
		</Link>
	);
};

export { ActiveLink };
