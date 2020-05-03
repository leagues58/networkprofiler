import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import RequestContainer from './components/RequestContainer';
import RequestDetailContainer from './components/RequestDetailContainer';
import ResponseContainer from './components/ResponseContainer';
import {initialRequestState, initialResponseState} from './InitialStates';

function App() {
  
  const [request, setRequest] = useState(initialRequestState);
  const [response, setResponse] = useState(initialResponseState);

  return (
    <div className='appContainer'>
      <Header />
      {JSON.stringify(request)}
      <RequestContainer state={{request, setRequest}} />

      <div className='detailContainer'>
        <RequestDetailContainer />

        <ResponseContainer />
      </div>
    </div>
  );
}

export default App;
