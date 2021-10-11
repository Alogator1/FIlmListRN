import React from 'react';
import {Provider} from 'react-redux';
import ScreenList from './modules/ScreenList/screen-list.component';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ScreenList />
    </Provider>
  );
};

export default App;
