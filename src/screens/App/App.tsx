import React from 'react';
import { Provider } from 'react-redux';
import Map from '../../components/Map/Map';

import store from '../../redux/configureStore';
import './App.css';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <p>
          YEGO - Technical Test
        </p>
      </header>
      <div className="App-body">
        <Map />
      </div>
    </div>
  </Provider>
);

export default App;
