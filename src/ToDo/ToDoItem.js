import React from "react";

export default function ToDoItem({ title, description }) {
  let date = Date(Date.now());
  const dateCreated = date.toString().slice(0, 25);
  let complete = false;
  return (
    <div>
      <table>
        <tbody>
          {/* <tr>
            <th>Completed?</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Date Completed</th>
          </tr> */}
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{dateCreated}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
      {/* <hr />
      <span>
        <input type="checkbox" />
        <b>{title}</b>
      </span>
      <div>{description}</div>
      <div>{dateCreated}</div>
      <br /> */}
    </div>
  );
}
