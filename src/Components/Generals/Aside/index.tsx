import React, { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
	title: string;
	open: Boolean;
	closeFunction: () => void;
	children?: ReactNode;
	extraData?: ReactNode;
}
const AsideComponent = ({ title, children, open, closeFunction, extraData }: Props) => {
	return (
		<aside
			className={`${
				!open && 'hidden'
			} w-[300px] flex flex-col rounded-xl bg-white fixed right-8 border border-black bottom-4 top-20 max-h-screen  p-4 z-20`}
		>
			<div className="flex justify-between items-center">
				<h2 className="font-medium text-xl">{title}</h2>
				<button onClick={closeFunction}>
					<XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
				</button>
			</div>
			<div className="flex flex-col justify-between h-[calc(100%+3rem)]">
				<div className="overflow-y-auto flex-1">{children}</div>
				{extraData && extraData}
			</div>
		</aside>
	);
};

export { AsideComponent };
