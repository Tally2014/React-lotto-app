import Row from "./Row";
import { useState, useEffect } from 'react';
import './Board.css';

export default function Board() {
    
  const [configurations, setConfigurations] = useState({
    rows: 6,
    maxRandomNumber: 52,
    includeBonusBall: true,
    maxBonusNumber: 20,
    boards: 2
  });

  const handleConfigChange = (key, value) => {
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };
    
    // Create an array with 'boards' number of elements and map each element to a Row component
    const rowComponents = [...Array(configurations.boards)].map((_, index) => <Row key={index} />);

  return (
    <div>
        <section className='left'>
          <div className='randomNum'>
            <h2>
              Configurations
            </h2>

          </div>
            <div className='numConainer'>
              <div>
                <p>Rows:</p>
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
            <button>Generate</button>
        </section>
        <section>
          {rowComponents}
        </section>      
    </div>
  )
}
