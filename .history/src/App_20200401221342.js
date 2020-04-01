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
                <div className={this.state.color} style={{height:'100px',width:'100px',border:'solid red 3px'}}></div>
                <button onClick={this.handleColor}>变换颜色</button>
            </div>
         );
    }
    handleColor(e){
        this.setState({
            color:"black"?"red":"black"
        })
    }
}
 
export default App;