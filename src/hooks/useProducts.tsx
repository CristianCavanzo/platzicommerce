import { useState } from 'react';

const useProducts = () => {
	const [state, setState] = useState({
		shoppingCard: 0,
	});
	const handleCount = () => {
		const newValue = state.shoppingCard + 1;
		setState({ ...state, shoppingCard: newValue });
	};
	const setStateHandle = {
		handleCount,
	};
	return { state, setState: setStateHandle };
};

export { useProducts };
