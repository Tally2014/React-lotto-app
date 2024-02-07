import './App.css';
import Board from './components/Board';
import reactLogo from './assets/react.svg';

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
        <Board/>
      </section>
      
    </main>
      
    </>
  )
}

export default App
