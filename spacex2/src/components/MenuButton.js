import React, { Component } from 'react';
import '../../node_modules/react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from '../../node_modules/react-bulma-components/dist';


class MenuButton extends Component {
    render() {
      return (
        
        <container breakpoint="desktop">
            <div>
                <Button color="info" size="large" rounded>Next Launch</Button>
            </div>
            <div>
                <Button color="info" size="large" rounded>Previous Launch</Button>
            </div>
            <div>
                <Button color="info" size="large" rounded>Rockets</Button>
            </div>
            <div>
                <Button color="info" size="large" rounded>Where's the Roadster?</Button>
            </div>
        </container>
        
      )
    }
  }
  
  export default MenuButton