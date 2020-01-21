import React from 'react';
import './App.css';
import MenuButton from './components/MenuButton';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <MenuButton/>
      </header>
    </div>
  );
}

export default App;
