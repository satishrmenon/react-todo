import React, {Component} from 'react'

export default class TodoListItem extends Component {
    render() {
        const {item, onRemoveItem, onEditItem} = this.props;
        return (
            <div
                className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{item}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen" onClick={onEditItem}/>
                    </span>

                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash" onClick={onRemoveItem}/>
                    </span>
                </div>
            </div>
        )
    }
}
