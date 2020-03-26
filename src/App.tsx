import React from 'react';

//components
import Loader from 'components/Loader';
import Header from 'components/Header';
import { Provider } from 'react-redux';

//store
import createStore from 'helpers/createStore';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Loader />
    </Provider>
  );
}

export default App;
