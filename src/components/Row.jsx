import { useState } from 'react';
import Ball from './Ball';
import './Row.css';
import { getRolls } from '../utils';

export default function Row() {
    const [balls, setBalls] = useState(getRolls(6-1,52)); /*Generate Random Balls*/
    const [bonus, setBonus] = useState(getRolls(1,20)); /*Generate Bonus Ball*/
    console.log(bonus);
  return (
    <section className='Row'>
        {balls.map((v,i) => <Ball key={i} val={v}/>) /*Render Random Balls*/} 
        <Ball val={bonus} color={'#006CA5'} textColor={'#02367b'}/>  {/*Render Random Balls*/}
    </section>
  )
}
