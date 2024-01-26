import './Ball.css';

export default function Row({val, color='blue'}) {
  return (
    <div className='Ball' style={{backgroundColor: color}} >
      {val}
    </div>
  )
}
