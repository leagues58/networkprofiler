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

const RequestContainer = () => {
  const [request, setRequest] = useState();

  return (
    <div style={styles.requestContainer}>
      <form onSubmit={handleFormSubmit}>
        <select name='requestType'>
          <option>GET</option>
          <option>POST</option>
        </select>

        <input type='text' name='urlInput' />
        <button type='submit'>Submit</button>
      </form>
  </div>
  );
};


export default RequestContainer;