import React, { Component } from 'react';
import AppChild from './AppChild'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"black",
        }
        this.handleColor=this.handleColor.bind(this)
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log(snapShot)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('prevProps:',prevProps)
        console.log('prevState:',prevState)
        return 123
    }
    render() { 
        
        return ( 
            <div>
                <AppChild color={this.state.color}/>
                <button onClick={this.handleColor}>变换颜色</button>
            </div>
         );
    }
    handleColor(){
        this.setState({
            color:this.state.color==="black"?"red":"black",
        })
        console.log(this.state.color)
    }
}
 
export default App;