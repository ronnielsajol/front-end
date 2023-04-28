import React from "react";
import "./Table.css";

export default function TaskForm(props) {
  const { newTask, setNewTask, setShowForm, handleSubmit, isSubmitting } =
    props;
  return (
    <tr className="my-row">
      <td></td>
      <td>
        <input
          className="form-control"
          type="text"
          placeholder="Enter task name"
          value={newTask.tasks}
          onChange={(e) => setNewTask({ ...newTask, tasks: e.target.value })}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          value={newTask.startDate}
          onChange={(e) =>
            setNewTask({ ...newTask, startDate: e.target.value })
          }
        />
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
      </td>
      <td>
        <select
          className="form-select"
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="1">Low</option>
          <option value="2">Moderate</option>
          <option value="3">High</option>
        </select>
      </td>
      <td>
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              setShowForm(false);
            }}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}
