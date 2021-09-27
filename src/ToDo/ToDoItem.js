import React from "react";

export default function ToDoItem({ title, description }) {
  let date = Date(Date.now());
  const dateCreated = date.toString().slice(0, 25);
  const dateCompleted = "";

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "center",
    width: "100%",
  };

  const tdStyle = {
    border: "1px solid #85C1E9",
    background: "white",
    padding: "5px",
  };

  let complete = false;
  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td style={tdStyle}>{title}</td>
            <td style={tdStyle}>{description}</td>
            <td style={tdStyle}>{dateCreated}</td>
            <td style={tdStyle}>{dateCompleted}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
