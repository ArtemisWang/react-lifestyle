import React, { Component } from 'react';
import ListItem from './ListItem';

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

    onItemChange(item,emitter){
        const {list}=this.state
        this.setState({
            list:list.map(prexItem=>({
                text:prexItem.text,
                checked:prexItem.text===item.text?!prexItem.checked:prexItem.checked
            }))
        })
        emitter.emit('ItemChange',item)
    }

    render() {
        const {emitter}=this.props
        return ( 
            <div>
                <ul>
                    {this.state.list.map((item,index)=>(
                        <ListItem
                            key={`list-${index}`}
                            value={item.text}
                            checked={item.checked}
                            onChange={this.onItemChange.bind(this,item,emitter)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default List;