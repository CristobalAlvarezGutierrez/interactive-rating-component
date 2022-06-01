import { useState } from 'react';
import './numberRating.css';

const NumberRating = ({ arrayOfNumbers = [1], setterCurrentSelectionRating }) => {

	const [stateActiveRatingButton, setStateActiveRatingButton] = useState();

	const handleClickRatingButton = (e) => {
		setStateActiveRatingButton(e.target.id);
		setterCurrentSelectionRating({
			selected_value : e.target.value,
			out_of : arrayOfNumbers.length
		});
	}

	return (
		arrayOfNumbers.map((value, index) =>
			<div className='wrapper-number-rating' key={`id_rating_component_${index}`}>
				<button
					className={`number-rating-component ${stateActiveRatingButton ===  `id_rating_component_${index}` ? 'rating-button-active' : ''}`}
					key={`id_rating_component_${index}`}
					id={`id_rating_component_${index}`}
					value={value}
					onClick={(e) => handleClickRatingButton(e)}
				>
					{value}
				</button>
			</div>
		)
	)
}

export default NumberRating