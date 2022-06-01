import Container from "../../Components/Container/Container"
import thankYouImg from '../../resources/img/illustration-thank-you.svg';
import './thankYou.css';

const ThankYou = ({ stateCurrentSelecction }) => {
  return (
    <Container classNameCustom="custom-width-container custom-padding-container">
        <img className="thank-you-img mt-4" src={thankYouImg} alt="thank you illustration"/>
        <div className="flex aling-items-center flex-column mt-4">
            <span className="informative-span-selected-calification">
			{
				stateCurrentSelecction.selected_value !== undefined
				?
				`You selected ${stateCurrentSelecction.selected_value} out of ${stateCurrentSelecction.out_of}`
				:
				`You didn't select anything 😕`
			}
            </span>
            <h2 className="mt-2">Thank you!</h2>
            <p className="text-cenrer">
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    </Container>
  )
}

export default ThankYou