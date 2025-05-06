import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  
  render() {
    const { todos, handleRemove } = this.props;

    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {todos.map((item, index) => {
          return <Todo handleRemove={handleRemove} key={index} index={index} todo={item}/>
        })}
      </div>
    );
  }
}
