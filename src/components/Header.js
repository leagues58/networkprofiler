import React from 'react';

const styles = {
  appHeader: {
    display: 'flex',
    marginLeft: '3%',
    flexDirection: 'row',
    border: '1px solid black'
  },
  
  headerText: {
    marginLeft: '1%',
  }
}

const Header = () => {
  return (
    <header style={styles.appHeader}>
      <img src='./logo.png' />
      <div style={styles.headerText}>
        <h2>NetworkProfiler.app</h2>
        <h3>An experiment for learning how network requests work in javascript using the Fetch API.</h3>
      </div>
    </header>
  );
};


export default Header;