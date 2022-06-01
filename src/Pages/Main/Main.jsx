import { useState } from 'react';
import Rating from '../Rating/Rating';
import ThankYou from '../ThankYou/ThankYou';

const Main = () => {

	const [stateSubmit, setStateSubmit] = useState(false);
	const [stateCurrentSelecction, setStateCurrentSelecction] = useState({
		selected_value: undefined,
		out_of : undefined
	});

	return (
		!stateSubmit
		?
		<Rating
			currentStateSubmit={stateSubmit}
			setterStateSubmit={setStateSubmit}
			currentSelectionRating={stateCurrentSelecction}
			setterCurrentSelectionRating={setStateCurrentSelecction}
		/>
		:
		<ThankYou
			stateCurrentSelecction={stateCurrentSelecction}
		/>
	)
}

export default Main