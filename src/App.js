import React from 'react';
import Wrap from './Hoc/Wrap';
// import AcFiLogin from '../src/containers/AcFiLogin/AcFiLogin';
import MainContainer from '../src/containers/MainContainer/MainContainer';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <Wrap>
        <MainContainer/>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
