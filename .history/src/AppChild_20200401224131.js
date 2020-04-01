import React, { Component } from 'react';

class AppChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:""
         }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('nextProps:',nextProps,prevState)
        if(nextProps.color==="black"){
            return {
                color:"green"
            }
        }
        return null
    }
    render() { 
        console.log('子组件又渲染啦')
        return ( <div>
            <div style={{height:'100px',width:'100px',border:'solid red 3px',background:this.state.color}}></div>
        </div> );
    }
}
 
export default AppChild;