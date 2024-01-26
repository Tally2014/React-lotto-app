import './Ball.css';

export default function Ball({val, color}) {
  console.log(val);
  return (
    <div className='Ball' style={{backgroundColor: color}}>
      {val}
    </div>
  )
}
