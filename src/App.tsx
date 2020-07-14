import React from 'react';
import './Global.css';
import Router from "./Pages/index";
import GlobalState from "./Common/GlobalState";
function App() {
  return (
    <div className="App">
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
