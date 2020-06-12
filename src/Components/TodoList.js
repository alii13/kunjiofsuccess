import React, { Component } from "react";
import TodoItems from './TodoItems'
import "./TodoList.css";
import {Container} from 'react-bootstrap'


class TodoList extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          items: []
        };
       
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
      addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
           
        e.preventDefault();
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
      render() {
        return (<div style={{padding:"100px 0 100px 0"}}>

                  <Container className="text-center container1" >
                  <div className="heading">
                    <img className="heading__img" alt="todo list" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>
                    <h1 className="heading__title">To-Do List</h1>
                  </div>
                            <div className="todoListMain" style={{paddingTop:"30px"}}>
                              <div className="header">
                                <form onSubmit={this.addItem}>
                                  <input class="form__input" ref={(a) => this._inputElement = a} 
                                          placeholder="Tasks to do"/>
                                  <button className="button" type="submit"><span>Submit</span></button>
                                </form>
                              </div>
                              <TodoItems entries={this.state.items}
                                  delete={this.deleteItem}/>
                            </div>
                        </Container>
              </div>
        );
      }
  }

export default TodoList;