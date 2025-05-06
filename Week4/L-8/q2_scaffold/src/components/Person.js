import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    alert(`${this.props.person.email} deleted to your network`);
  }

  render() {
    const { img, email, id } = this.props.person;
    const { remove } = this.props;
    return (
      <div className="person">
        <b onClick={() => remove(id)}> X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
