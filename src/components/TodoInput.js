import React, {Component} from 'react'

export default class TodoInput extends Component {

    render() {

        const {item, onInputChange, onFormSubmit,editButton} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={onFormSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary-text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="Add a To do item"
                            onChange={onInputChange}
                            value={item}/>
                    </div>
                    <button 
                    type='submit' 
                    className={editButton? "btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3"}>
                    {editButton? 'Edit Item ': 'Add Item'}
                    </button>
                </form>

            </div>
        )
    }
}
