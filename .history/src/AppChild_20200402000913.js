import React, { Component } from 'react';

class AppChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"white",
            prevColor:""
         }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('nextProps:',nextProps,prevState)
        if(nextProps.color==="black"&&prevState.prevColor!=="green"){
            return {
                color:"green",
                prevColor:"green"
            }
        }
        if(nextProps.color==="red"&&prevState.prevColor!=="pink"){
            return {
                color:"pink",
                prevColor:"pink"
            }
        }
        return null
    }
    // componentDidUpdate(prevProps,prevState,snapShot){
    //     console.log(snapShot)
    // }
    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     console.log('prevProps:',prevProps)
    //     console.log('prevState:',prevState)
    //     return 123
    // }
    render() { 
        console.log('子组件又渲染啦')
        return ( <div>
            <div style={{height:'100px',width:'100px',border:'solid red 3px',background:this.state.color}}></div>
        </div> );
    }
}
 
export default AppChild;