import React from 'react';
import './Components/tradeBlotter.css' 
import Table from './Components/Table';
import TradeBlotter from './Components/TradeBlotter';

function App() {
  return (
    <div className="App">
      <TradeBlotter />
      <Table />
    </div>
  );
}

export default App;