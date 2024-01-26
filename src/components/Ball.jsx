import './Ball.css';

export default function Ball({val, color, textColor='#006CA5'}) {
  return (
    <div className='Ball' style={{backgroundColor: color}}>
      <span style={{color: textColor}}>{val}</span>
    </div>
  )
}
