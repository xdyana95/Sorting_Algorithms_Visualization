import React from 'react';
import './App.css';
import SelectionSort from './Components/SelectionSort';
import Navbar from './Components/Navbar';
import MergeSort from './Components/MergeSort';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // withRouter
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          {/* <SelectionSort/> */}
          <Route path="/selection" component={SelectionSort} />
          <Route path="/merge" component={MergeSort} />
          {/* <MergeSort/> */}
        </Switch>

      </Router>
    </>
  );
}

export default App;
