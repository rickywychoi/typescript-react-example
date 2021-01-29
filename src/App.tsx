import React from 'react';
import './App.css';

import TextField from './TextField'
import Counter from './Counter'

function App() {
  return (
    <div className="App" style={{padding: "5%"}}>
        <TextField 
          text="Please type in something for: " 
          person={{firstName: 'Joe', lastName: 'Bloggs'}} 
        />
        <Counter>
          {(count, setCount) => (
            <div className="mt-5" style={{fontSize: "1.5em"}}>
              {count}
              <br/>
              <button 
                type="button"
                className="btn btn-primary" 
                onClick={() => setCount(++count)}
              >
                +
              </button>
            </div>
          )}
        </Counter>
    </div>
  );
}

export default App;
