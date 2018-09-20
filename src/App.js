import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./todo/Table";
import Form from "./todo/Form";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class App extends Component {
  state = {
    characters: [
      {
        id: 1,
        name: "Gajanan",
        dept: "Development",
        email: "gajanan.pawale.angular@gmail.com",
        job: "Developer"
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            this.setState({
              characters: characters.filter((character, i) => {
                return i !== index;
              })
            });
          }
        },
        {
          label: "No",
          onClick: () => {
            console.log("Close Popup");
          }
        }
      ]
    });
  };

  handleSubmit = character => {
    character.id = this.state.characters.length + 1;
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-sub-title"> To Do App </h1>
        </header>
        <div className="container">
          <h2 className="App-intro">
            CRUD - Create Read Update and Delete item from below table :
          </h2>
          <p>Add a employee with a name, dept, email & job to the table.</p>
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <h3>Add New Employee</h3>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
