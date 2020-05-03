import React, {useState} from 'react';

const styles = {
  requestContainer: {
    border: '1px solid green',
    padding: '1%',
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  
};

const RequestContainer = ({state}) => {

  const {request, setRequest} = state;

  const requestTypeChangeHandler = (event) => {
    setRequest({...request, requestType: event.target.value})
  };
  return (
    <div style={styles.requestContainer}>
      <form onSubmit={handleFormSubmit}>
        <select name='requestType' value={request.requestType} onChange={requestTypeChangeHandler}>
          <option value='get'>GET</option>
          <option value='post'>POST</option>
        </select>

        <input type='text' name='urlInput' />
        <button type='submit'>Submit</button>
      </form>
  </div>
  );
};


export default RequestContainer;