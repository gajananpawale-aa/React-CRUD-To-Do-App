import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: 0,
      name: "",
      dept: "",
      email: "",
      job: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, dept, email, job } = this.state;

    return (
      <div className="empForm">
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Dept</label>
          <input
            type="text"
            name="dept"
            value={dept}
            onChange={this.handleChange}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Job</label>
          <input
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default Form;
