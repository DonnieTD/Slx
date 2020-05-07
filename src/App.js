import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Question:</h1>
          <p>
              question
          </p>

          <form>
              <div>
                  <label for="answer">Answer:</label>                                    
              </div>
              <div style={{marginTop:'30px'}}>
                  <input style={{width:"20vw",height:"5vh"}} name="answer" type="text"></input>
              </div>
              <button type="submit">Answer</button>
          </form>
      </header>
    </div>
  );
}

export default App;
