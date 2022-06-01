import './componentButtom.css';

const SubmitButtom = ({ onClickFunctionEvent }) => {
  return (
    <div className='butttom' onClick={() => onClickFunctionEvent()}>
      Submit
    </div>
  )
}

export default SubmitButtom