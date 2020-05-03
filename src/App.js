import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import RequestContainer from './components/RequestContainer';
import RequestDetailContainer from './components/RequestDetailContainer';
import ResponseContainer from './components/ResponseContainer';

function App() {
  return (
    <div className='appContainer'>
      <Header />

      <RequestContainer />

      <div className='detailContainer'>
        <RequestDetailContainer />

        <ResponseContainer />
      </div>
    </div>
  );
}

export default App;
