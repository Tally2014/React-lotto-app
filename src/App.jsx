import './App.css';
import Board from './components/Board';
import reactLogo from './assets/react.svg'

function App() {

  return (
    <>
    <nav>
    <div className='navbar-container'>
        <img src={reactLogo} className='Logo' alt='React Logo'/>
        <h2>Lotto-Gen</h2>
      </div>
    </nav>
    <main>
      <section className='container'>
        <section className='left'>
          <div className='randomNum'>
            <h2>
              Configurations
            </h2>

          </div>
            <div className='numConainer'>
              <div>
                <p>Rows:</p>
                <input type='number' value={6}/>
              </div>
              <div>
                <p>Max Random Number:</p>
                <input type='number' value={52}/>
              </div>
              <div>
                <p>Bonus Ball</p>
                <input type="checkbox" value={true}/>
              </div>
              <div>
                <p>Max bonus Number:</p>
                <input type='number' value={20}/>
              </div>
            </div>
            <button>Generate</button>
        </section>
        <section className='middle'>
          <Board/>
          <Board/>
        </section>
      </section>
      
    </main>
      
    </>
  )
}

export default App
