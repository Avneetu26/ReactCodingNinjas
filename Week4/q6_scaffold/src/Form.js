import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  addTodo = () => {
    const {handleAdd} = this.props;
    handleAdd(this.state.text);
  }

  render() {
    
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={this.addTodo}>Add</button>
        {/* onClick={(e) => this.handleAdd(e)} */}
      </div>
    );
  }
}
