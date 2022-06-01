import startBadgeImg from '../../resources/img/icon-star.svg';
import './startBadge.css';

const StartBadge = () => {
  return (
    <div className='wrapper-start-badge'>
        <div className='start-badge'>
            <img src={startBadgeImg} alt="start badge" />
        </div>
    </div>
  )
}

export default StartBadge