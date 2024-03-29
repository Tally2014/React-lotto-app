import { useState, useEffect } from 'react';
import Ball from './Ball';
import './Row.css';
import { getRolls } from '../utils';

export default function Row({numbers=6, isBonus=true, maxNumber=52, bonusMax=20, clickCount}) {
    
    const [balls, setBalls] = useState([]); 
    const [bonus, setBonus] = useState(getRolls(1,bonusMax));

    useEffect(() => {
        const fields = isBonus ? numbers - 1 : numbers;
        setBalls(getRolls(fields, maxNumber)); // Generate Random Balls
        setBonus(getRolls(1,bonusMax)); // Generate Bonus Ball
      }, [numbers, isBonus, maxNumber, bonusMax,clickCount]);

  return (
    <section className='Row'>
        {balls.map((v,i) => <Ball key={i} val={v}/>) /*Render Random Balls*/} 
        {isBonus && <Ball val={bonus} color={'#006CA5'} textColor={'#02367b'}/> /*Render Bonus Ball*/}
    </section>
  )
}