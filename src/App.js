import React from 'react';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <header className='appHeader'>
        <img src='./logo.png' />
        <div className='headerText'>
          <h2>NetworkProfiler.app</h2>
          <h3>An experiment for learning how network requests work in javascript using the Fetch API.</h3>
        </div>
      </header>


      <div className='requestContainer'>
        <h3>Request Container</h3>
      </div>

      <div className='detailContainer'>
        <div className='requestDetailContainer'>
          <h3>Request Details Container</h3>
        </div>

        <div className='responseContainer'>
          <h3>Response Container</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
