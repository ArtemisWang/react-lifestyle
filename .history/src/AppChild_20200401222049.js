import React, { Component } from 'react';

class AppChild extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div style={{height:'100px',width:'100px',border:'solid red 3px',background:this.state.color}}></div>
        </div> );
    }
}
 
export default AppChild;