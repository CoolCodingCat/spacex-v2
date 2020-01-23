import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import '../../node_modules/react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Container } from '../../node_modules/react-bulma-components/dist';
import '../styles/App.css';


class MenuButton extends Component {
    render() {
      return (
        
        <Container breakpoint="desktop">
            <div>
                <Button className="nav" fullwidth color="info" size="large" rounded><Link to="/next">Next Launch</Link></Button>
            </div>
            <div>
                <Button className="nav" fullwidth color="info" size="large" rounded><Link to="/rockets">Rockets</Link></Button>
            </div>
            <div>
                <Button className="nav" fullwidth color="info" size="large" rounded><Link to="/roadster">Where's the Roadster?</Link></Button>
            </div>
        </Container>
        
      )
    }
  }
  
  export default MenuButton