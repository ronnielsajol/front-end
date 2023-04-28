import React from "react";
import { handleEdit, getPriorityText } from "../helpers";
import RowButtons from "./RowButtons";

export default function TaskRow({ task, handleEdit, handleDelete }) {
  return (
    <tr
      className="my-row fade-in-left"
      key={task.id}
      id={task.id}
      data-task-id={task.id}
    >
      <td>
        <input className="form-check-input" type="checkbox" />
      </td>
      <td>
        <p className="fw-bold mb-1">{task.tasks}</p>
      </td>
      <td>
        <p className="fw-normal mb-1">{task.startDate}</p>
      </td>
      <td>
        <p className="fw-normal mb-1">{task.dueDate}</p>
      </td>
      <td>{getPriorityText(task.priority)}</td>
      <td>
        <RowButtons
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          task={task}
        />
      </td>
    </tr>
  );
}
