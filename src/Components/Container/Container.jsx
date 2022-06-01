import './container.css';

const Container = ({ children, classNameCustom = "" }) => {
	return (
		<div className={`wrapper-container-rating ${classNameCustom }`}>
			{children}
		</div>
	)
}

export default Container