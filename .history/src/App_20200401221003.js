import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"black",
         }
    }
    render() { 
        handleColor=(e)=>{
            this.setState({
                color:"black"?"red":"black"
            })
        }
        return ( 
            <div>
                <div className={this.state.color} style={{height:'100px',width:'100px',border:'solid red 3px'}}></div>
                <button onChange={handleColor}>变换颜色</button>
            </div>
         );
    }
    
}
 
export default App;