import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import '../../node_modules/react-bulma-components/dist/react-bulma-components.min.css';



class BackHome extends Component {
    render() {
      return (
        
        <div className="cross">
            <span class="icon has-text-info">
                <Link to="/"><i class="fas fa-times-circle"></i></Link>
            </span> 
        </div>
        
      )
    }
  }
  
  export default BackHome