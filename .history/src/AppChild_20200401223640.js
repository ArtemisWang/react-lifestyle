import React, { Component } from 'react';

class AppChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"black"
         }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('nextProps:',nextProps,prevState)
        return null
    }
    render() { 
        console.log('子组件又渲染啦')
        let {color}=this.props
        return ( <div>
            <div style={{height:'100px',width:'100px',border:'solid red 3px',background:color}}></div>
        </div> );
    }
}
 
export default AppChild;