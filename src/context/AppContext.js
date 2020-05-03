import {createContext} from 'react';

export const initialState = {
  request: {
    requestType: 'get',
    requestURL: 'www.stillwatertrivia.com',
  },
  response: {

  }
};

const AppContext = createContext(initialState);

export default AppContext;