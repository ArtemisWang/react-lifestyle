import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"black",
        }
        this.handleColor=this.handleColor.bind(this)
    }
    render() { 
        
        return ( 
            <div>
                <div style={{height:'100px',width:'100px',border:'solid red 3px',background:this.state.color}}></div>
                <button onClick={this.handleColor}>变换颜色</button>
            </div>
         );
    }
    handleColor(){
        console.log('click')
        this.setState({
            color:"black"?"red":"black",
        })
    }
}
 
export default App;