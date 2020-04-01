import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"black",
         }
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.color} style="height:100em;"></div>
                <button ></button>
            </div>
         );
    }
}
 
export default App;