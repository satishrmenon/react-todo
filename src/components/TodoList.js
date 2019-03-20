import React, {Component} from 'react'
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
    render() {
        const {items, onClearClick, onRemoveItem, onEditItem} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className='text-capitalize text-center'>To Do List</h3>
                {items.map((iterator) => {
                    return <TodoListItem 
                            key={iterator.id} 
                            item={iterator.item}
                            onRemoveItem = 
                            {
                                ()=>{
                                    onRemoveItem(iterator.id);
                                }
                            }
                            onEditItem = 
                            {
                                ()=>{
                                    onEditItem(iterator.id);
                                }
                            }
                            />
                })
}
                <button
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={onClearClick}>
                    Clear List
                </button>
            </ul>
        )
    }
}
