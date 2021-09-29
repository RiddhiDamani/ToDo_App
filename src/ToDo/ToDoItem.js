import React, { useState } from "react";

export default function ToDoItem({
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
}) {
  const [checked, setCheckBox] = useState(false);

  function handleChange() {
    setCheckBox(!checked);
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="checkbox"
          defaultChecked={checked}
          onChange={handleChange}
        />
        <span>
          <strong>Title: </strong>
          {title}
        </span>
        <br />
        <span>
          <strong>Description: </strong>
          {description}
        </span>
        <br />
        <span>
          <strong>Date Created:</strong> {dateCreated}
        </span>
        <br />
        <span>
          <strong>Date Completed:</strong>
          {checked && <text> {Date(Date.now()).toString().slice(0, 25)} </text>}
        </span>
        <br />
        <hr></hr>
      </div>
    </div>
  );
}
