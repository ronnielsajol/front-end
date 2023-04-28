import React from "react";
import editIcon from "../icons/edit.png";
import deleteIcon from "../icons/delete.png";
import { useState } from "react";

export default function RowButtons({ task, handleEdit, handleDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="d-flex justify-content-evenly">
      {confirmDelete ? (
        <div className="d-flex justify-content-evenly active-delete">
          <button
            className="btn btn-rounded btn-submit deleteButton"
            onClick={() => handleDelete(task.id)}
          >
            Confirm{" "}
          </button>
          <button
            className="btn btn-rounded btn-cancel deleteButton"
            onClick={() => setConfirmDelete(false)}
          >
            Cancel{" "}
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-evenly">
          <button className="btn-img" onClick={handleEdit}>
            <img src={editIcon} alt="edit" />
          </button>
          <button className="btn-img" onClick={() => setConfirmDelete(true)}>
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
      )}
    </div>
  );
}
