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
                <div className={this.state.color}></div>
                <button ></button>
            </div>
         );
    }
}
 
export default App;