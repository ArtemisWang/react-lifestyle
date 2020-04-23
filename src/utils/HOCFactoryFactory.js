import React, { Component } from 'react';
function HOCFactoryFactory(...params){
    // 做一些改变 params 的事
    return function HOCFactory(WrappedComponent){
        return class HOC extends Component {
            render(){
                return <WrappedComponent {...this.props}/>
            }
        }
    }
}

// 使用时
// 方法一
HOCFactoryFactory(params)(WrappedComponent)
// 方法二
@HOCFactoryFactory(params)
class WrappedComponent extends Component{}