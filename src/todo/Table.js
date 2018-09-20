import React, { Component } from "react";
import delete_logo from "../assets/delete_icon.svg";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Dept.</th>
        <th>Email</th>
        <th>Job</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.dept}</td>
        <td>{row.email}</td>
        <td>{row.job}</td>
        <td>
          <img
            src={delete_logo}
            onClick={() => props.removeCharacter(index)}
            className="deleteIcon"
            alt="X"
          />
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table id="empTable">
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
