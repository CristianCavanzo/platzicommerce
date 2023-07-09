import React, { ReactNode } from 'react';
import { ActiveLink } from '../ActiveLink';
interface Props {
	children: ReactNode;
	href: string;
	speacialClass?: string;
}
const ItemNavBar = ({ children, href, speacialClass }: Props) => {
	return (
		<li className={`${speacialClass}`}>
			<ActiveLink href={href}>{children}</ActiveLink>
		</li>
	);
};

export { ItemNavBar };
