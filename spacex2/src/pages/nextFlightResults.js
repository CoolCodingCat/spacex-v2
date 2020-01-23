import React, { Component} from 'react';
import Header from '../components/Header';
import BackHome from '../components/ReturnHome';
//import '../App.css';



class NextFlight extends Component {
    render() {
      return (
        
        <div className="App">
      <header className="App-header">
        <Header/>
        <BackHome/>
        <h1>NEXT FLIGHT</h1>
      </header>
      
    </div>
        
      )
    }
  }
  
  export default NextFlight