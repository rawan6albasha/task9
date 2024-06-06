import  { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [lastPopupShownAt, setLastPopupShownAt] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('red');

  useEffect(() => {
    alert('Welcome to the page!');
  }, []);

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      if (count !== lastPopupShownAt) {
        setLastPopupShownAt(count);
        alert('welocm !!');
      }
    }
  }, [count, lastPopupShownAt]);



  useEffect(() => {
    
    if (count % 10 === 0 && count !== 0) {
     
      console.log('Count is a multiple of 10');
      setBackgroundColor('lightblue');
    } else if (count % 100 === 0 && count !== 0) {
      setBackgroundColor('green');
   
      console.log('Count is a multiple of 100');
    } else if (count % 1000 === 0 && count !== 0) {
      setBackgroundColor('blue');
      console.log('Count is a multiple of 1000');
    }
  }, [count]);




  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count >= 10 && count < 100) {
      setCount(count + 10);
    } else if (count >= 100 && count < 1000) {
      setCount(count + 100);
    }
  };

  const decrementCount = () => {
    if (count >= 100 && count <= 1000) {
      setCount(count - 100);
    } else if (count >= 10 && count < 100) {
      setCount(count - 10);
    } else if (count < 10) {
      setCount(count - 1);
    }
  };

  return (
    <>
          <div className="card" style={{ backgroundColor }}>
        <button onClick={incrementCount}>+</button>
        {count >= 1 && <button onClick={decrementCount}>-</button>}
        <p>Count is {count}</p>
      </div>
    </>
  );
}

export default App;
