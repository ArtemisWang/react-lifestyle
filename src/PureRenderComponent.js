import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class PureRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() { 
        console.log('PureRendering')
        return ( 
            <div style={{background:this.props.color}}>foo</div>
         );
    }
}
 
export default PureRenderComponent;