import React, { Component } from 'react';
import emitter from './events'
import AppChild from './AppChild'
import List from './List';
import PureRenderComponent from './PureRenderComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"pink",
        }
        this.handleColor=this.handleColor.bind(this)
    }

    componentDidMount(){
        this.itemChange=emitter.on('ItemChange',(data)=>{
            console.log(data)
        })
    }
    
    componentWillUnmount(){
        emitter.removeListener(this.itemChange)
    }

    render() { 
        
        return ( 
            <div>
                <AppChild color={this.state.color}/>
                <button onClick={this.handleColor}>变换颜色</button>
                <List 
                    list={[{text:1},{text:2}]}
                />
                <PureRenderComponent color={this.state.color}/>
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