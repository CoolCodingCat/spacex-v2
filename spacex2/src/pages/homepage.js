import React, { Component} from 'react';
//import '../App.css';
import MenuButton from '../components/MenuButton';
import Header from '../components/Header';


class Home extends Component {
    render() {
      return (
        
        <div className="App">
      <header className="App-header">
        <Header/>
        <MenuButton/>
      </header>
    </div>
        
      )
    }
  }
  
  export default Home