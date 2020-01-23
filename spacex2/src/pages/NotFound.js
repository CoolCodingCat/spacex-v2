import React, { Component} from 'react';
import Header from '../components/Header';
import BackHome from '../components/ReturnHome';
//import '../App.css';



class NotFound extends Component {
        render() {
          return (
            
            <div className="App">
          <header className="App-header">
            <Header/>
            <BackHome/>
            <h1>404 PAGE NOT FOUND</h1>
          </header>
        </div>
            
          )
        }
      }
  
  export default NotFound