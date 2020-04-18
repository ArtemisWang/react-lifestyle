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

    onItemChange(item){
        const {list}=this.state
        this.setState({
            list:list.map(prexItem=>({
                text:prexItem.text,
                checked:prexItem.text===item.text?!prexItem.checked:prexItem.checked
            }))
        })
    }

    render() { 
        return (  );
    }
}
 
export default List;