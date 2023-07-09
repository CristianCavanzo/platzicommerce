import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useEffect, useState } from 'react';
interface Props {
	children: ReactNode;
	href: string;
}
const ActiveLink: FC<Props> = ({ children, href }) => {
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
