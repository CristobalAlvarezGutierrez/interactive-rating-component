import Container from '../../Components/Container/Container';
import StartBadge from '../../Components/StartBadge/StartBadge';
import NumberRating from '../../Components/NumberRating/NumberRating';
import SubmitButtom from '../../Components/ComponentButtom/ComponentButtom';
import './rating.css';

const Rating = ({ currentStateSubmit, setterStateSubmit, setterCurrentSelectionRating }) => {

	const handleSubmitEvent = () =>{
		setterStateSubmit(!currentStateSubmit);
	}

	return (
		<Container>
			<StartBadge />
			<div className='mt-4'>
				<h1>How did we do?</h1>
				<p className='mt-2'>
					Please let us know how we did with your support request. All feedback is appreciated
					to help us improve our offering!
				</p>
			</div>
			<div className='raiting-qualifications flex j-center mt-4'>
				<NumberRating
					arrayOfNumbers={[1,2,3,4,5]}
					setterCurrentSelectionRating={setterCurrentSelectionRating}
				/>
			</div>
			<div className="mt-4">
				<SubmitButtom
					onClickFunctionEvent={handleSubmitEvent}
				/>
			</div>
		</Container>
	)
}

export default Rating