import Row from "./Row";
import { useState, useEffect } from 'react';
import './Board.css';

export default function Board() {
    
  const [configurations, setConfigurations] = useState({
    rows: 5,
    maxRandomNumber: 52,
    includeBonusBall: true,
    maxBonusNumber: 20,
    boards: 5,
  });
  let [rows, setRows] = useState();
  const [clickCount, setClickCount] = useState(0);


  const handleConfigChange = (key, value) => {
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  function handleGenerate(){

    setClickCount(prevCount => prevCount + 1); // Increment clickCount on each click

    // Generate an array of length equal to the number of boards
    const boardIndexes = Array.from({ length: configurations.boards }, (_, index) => index);
    setRows(<div>
      {boardIndexes.map(index => (
        <Row key={index} 
              numbers={configurations.rows} 
              isBonus={configurations.includeBonusBall}
              maxNumber={configurations.maxRandomNumber}
              bonusMax={configurations.maxBonusNumber}
              clickCount={clickCount}/> // Pass clickCount as a prop/>
      ))}
    </div>)
  }
  

  return (
    <div>
        <section className='config'>
          <div className='cofigTitle'>
            <h2>
              Generate 
            </h2>
            <hr />
          </div>
            <div className='configContainer'>
              <div>
                <p>Balls #:</p>
                <input type='number' value={configurations.rows}
                  onChange={(e) => handleConfigChange('rows', parseInt(e.target.value))}/>
              </div>
              <div>
                <p>Max Random #:</p>
                <input type='number' value={configurations.maxRandomNumber}
                  onChange={(e) => handleConfigChange('maxRandomNumber', parseInt(e.target.value))}/>
              </div>
              <div>
                <p>Bonus Ball</p>
                <input type="checkbox" checked={configurations.includeBonusBall}
                  onChange={(e) => handleConfigChange('includeBonusBall', e.target.checked)}/>
              </div>
              <div>
                <p>Max bonus #:</p>
                <input type='number' value={configurations.maxBonusNumber}
                  onChange={(e) => handleConfigChange('maxBonusNumber', parseInt(e.target.value))}
                />
              </div>
              <div>
                <p>No. of Boards:</p>
                <input type='number' value={configurations.boards}
                  onChange={(e) => handleConfigChange('boards', parseInt(e.target.value))}
                />
              </div>
            </div>
            <hr />
            <button onClick={handleGenerate}>Generate</button>
        </section>
        <section>
          {rows}
        </section>      
    </div>
  )
}
