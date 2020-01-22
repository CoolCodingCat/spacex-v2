import React, { Component } from 'react';
import '../../node_modules/react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Container } from '../../node_modules/react-bulma-components/dist';
import '../styles/App.css';


class MenuButton extends Component {
    render() {
      return (
        
        <Container breakpoint="desktop">
            <div>
                <Button fullwidth color="info" size="large" rounded>Next Launch</Button>
            </div>
            <div>
                <Button fullwidth color="info" size="large" rounded>Previous Launch</Button>
            </div>
            <div>
                <Button fullwidth color="info" size="large" rounded>Rockets</Button>
            </div>
            <div>
                <Button fullwidth color="info" size="large" rounded>Where's the Roadster?</Button>
            </div>
        </Container>
        
      )
    }
  }
  
  export default MenuButton