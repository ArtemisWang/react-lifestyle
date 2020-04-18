import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:this.props.list.map(item=>({
                text:item.text,
                checked:item.checked||false
            }))
        }
    }
    render() { 
        return (  );
    }
}
 
export default List;