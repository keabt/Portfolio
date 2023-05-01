import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App({text}) {
  const [count, setCount] = useState(0)
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const text = 'Keeab';

    const timer = setInterval(() => {
      setDisplayText((prevText) => prevText + text.charAt(i));

      i++;

      if (i === text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className='page'>
      <h1>Hi, my name is {displayText}</h1>
      <h2>This is my portfolio</h2>
      <div></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Footer/>
      </div>
   
  );
}

export default App;
