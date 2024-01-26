import React from 'react';
import Ball from './Ball';
import './Row.css';

export default function Row() {
  return (
    <section className='Row'>
        <Ball val={'21'} color={'blue'}/>
        <Ball val={'7'} color={'red'}/>
    </section>
  )
}
