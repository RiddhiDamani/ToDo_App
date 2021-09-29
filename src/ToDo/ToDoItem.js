import React, { useState } from "react";

export default function ToDoItem({
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
}) {
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "center",
    width: "100%",
  };

  const tdStyle = {
    border: "1px solid black",
    background: "white",
    padding: "5px",
  };

  const [checked, setCheckBox] = useState(false);

  

  function handleChange(evt) {
    setCheckBox(!checked);
  }

  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                name="checkbox"
                defaultChecked={checked}
                onChange={handleChange}
              />
            </td>
            <td style={tdStyle}>{title}</td>
            <td style={tdStyle}>{description}</td>
            <td style={tdStyle}>{dateCreated}</td>
            <td style={tdStyle}>
              {checked && (
                <text> {Date(Date.now()).toString().slice(0, 25)} </text>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
