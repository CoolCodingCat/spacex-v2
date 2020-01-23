import React, { Component } from 'react';
import '../../node_modules/react-bulma-components/dist/react-bulma-components.min.css';
import spacex from '../ressources/spacex-logo-inverted.png';



class Header extends Component {
    render() {
      return (
        
        <div className="header">
          <img className="logo-space" src={spacex} alt="space X logo"/>
            <div>
                <h2 className="slogan">Summon the Dragons</h2>
            </div>
           
        </div>
        
      )
    }
  }
  
  export default Header