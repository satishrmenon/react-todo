import React, {Component} from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editButton: false
    }
    onInputChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState(() => {
            return {item: value}
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    
        const newitem = {
            id: this.state.id,
            item: this.state.item
        }

        const newitems = [
            ...this.state.items,
            newitem
        ];
        this.setState(() => {
            return {items: newitems, id: uuid(), item: '', editButton: false}

        })
    }
    onClearClick = (e) => {
        e.preventDefault();
        this.setState(()=>{
          return{
            items:[]
          }
        })
    }
    onRemoveItem = (itemToRemove)=>{
      const remainingItems = this.state.items.filter((iterator)=>{
        return iterator.id !== itemToRemove;
      })
      this.setState(()=>{
        return{
          items: remainingItems
        }
      })
    }

    onEditItem = (itemToEdit)=>{
      const remainingItems = this.state.items.filter((iterator)=>{
        return iterator.id !== itemToEdit;
      })

      this.state.items.map((iterator)=>{
        if(iterator.id === itemToEdit){
          console.log(iterator.id,iterator.item);
          this.setState(()=>{
            return{
              items: remainingItems,
              item: iterator.item,
              id: iterator.id,
              editButton: true
            }
          })
        }
          return 'nothing';
        
      })
      
      

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">
                            TodoInput
                            <TodoInput
                                item={this.state.item}
                                onInputChange={this.onInputChange}
                                onFormSubmit={this.onFormSubmit}
                                editButton={this.state.editButton}
                                />
                            <TodoList 
                            items={this.state.items} 
                            onClearClick={this.onClearClick}
                            onRemoveItem={this.onRemoveItem}
                            onEditItem={this.onEditItem}
                            />
                        </h3>
                    </div>

                </div>

            </div>
        )
    }
}
