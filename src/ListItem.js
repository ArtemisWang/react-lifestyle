import React, { Component } from 'react';


class ListItem extends Component {
    static defaultProps={
        checked:false
    }

    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
                <span>{this.props.value}</span>
            </li>
        );
    }
}
 
export default ListItem;