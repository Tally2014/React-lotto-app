import React from 'react';
import Ball from './Ball';
import './Row.css';

export default function Row() {
  return (
    <section className='Row'>
        <Ball val={'09'} />
        <Ball val={'16'} />
        <Ball val={'21'} />
        <Ball val={'26'} />
        <Ball val={'39'} />
        <Ball val={'16'} color={'#006CA5'} textColor={'#02367b'}/>
    </section>
  )
}
