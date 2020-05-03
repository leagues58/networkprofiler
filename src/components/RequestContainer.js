import React, {useState} from 'react';
import makeRequest from '../MakeRequest';

const styles = {
  requestContainer: {
    border: '1px solid green',
    padding: '1%',
  }
};

const handleFormSubmit = (event, requestFromForm) => {
  event.preventDefault();

  const response = makeRequest(requestFromForm);

  alert(response);

  
};

const RequestContainer = ({state}) => {

  const {request, setRequest} = state;

  const requestTypeChangeHandler = (event) => {
    setRequest({...request, requestType: event.target.value});
  };

  const requestURLChangeHandler = (event) => {
    setRequest({...request, requestURL: event.target.value});
  };

  return (
    <div style={styles.requestContainer}>
      <form onSubmit={(event) => {handleFormSubmit(event, request)}}>
        <select name='requestType' value={request.requestType} onChange={requestTypeChangeHandler}>
          <option value='get'>GET</option>
          <option value='post'>POST</option>
        </select>

        <input type='text' name='urlInput' value={request.requestURL} onChange={requestURLChangeHandler}/>
        <button type='submit'>Submit</button>
      </form>
  </div>
  );
};


export default RequestContainer;