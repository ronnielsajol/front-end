import React, { useState } from "react";
import "./Table.css";

export default function EditTaskForm({
  task,
  setNewTask,
  handleSubmit,
  isSubmitting,
  handleCancelEdit
}) {
  console.log(task);
  return (
    <tr className="my-row" id={task.id}>
      <td></td>
      <td>
        <input
          className="form-control"
          type="text"
          placeholder="Enter task name"
          value={task.tasks}
          onChange={(e) => setNewTask({ ...task, tasks: e.target.value })}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          value={task.startDate}
          onChange={(e) => setNewTask({ ...task, startDate: e.target.value })}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          value={task.dueDate}
          onChange={(e) => setNewTask({ ...task, dueDate: e.target.value })}
        />
      </td>
      <td>
        <select
          className="form-select"
          value={task.priority}
          onChange={(e) => setNewTask({ ...task, priority: e.target.value })}
        >
          <option value="1">Low</option>
          <option value="2">Moderate</option>
          <option value="3">High</option>
        </select>
      </td>
      <td>
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-rounded btn-submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
          <button
            className="btn btn-rounded btn-cancel"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}
