import React from 'react';
import Wrap from './Hoc/Wrap';
// import AcFiLogin from '../src/containers/AcFiLogin/AcFiLogin';
import MainContainer from '../src/containers/MainContainer/MainContainer';
import {HashRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router >
      <Wrap>
        <MainContainer/>
      </Wrap>
    </Router>
  );
}

export default App;
