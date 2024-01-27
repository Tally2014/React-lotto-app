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
      <div className='container'>
        <div className='left'>

        </div>
        <div className='middle'>
          <Board/>
          <Board/>
        </div>
      </div>
      
    </main>
      
    </>
  )
}

export default App
