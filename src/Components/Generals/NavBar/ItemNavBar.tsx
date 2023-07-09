import React, { FC, ReactNode } from 'react';
import { ActiveLink } from '../ActiveLink';
interface Props {
	children: ReactNode;
	href: string;
	speacialClass?: string;
}
const ItemNavBar: FC<Props> = ({ children, href, speacialClass }) => {
	return (
		<li className={`${speacialClass}`}>
			<ActiveLink href={href}>{children}</ActiveLink>
		</li>
	);
};

export { ItemNavBar };
