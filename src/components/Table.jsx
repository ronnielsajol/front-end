import React, { useState, useEffect } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "./Table.css";
import { getTasks, createTask, deleteTask, updateTask } from "../api";
import TaskForm from "./TaskForm";
import TaskRow from "./TaskRow";
import EditTaskForm from "./EditTaskForm";

export default function Table() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    isChecked: false,
    tasks: "",
    startDate: "",
    dueDate: "",
    priority: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  function handleAddTask() {
    setShowForm(true);
  }

  function handleEditTask(taskId) {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    console.log(taskToEdit);
    setNewTask(taskToEdit);
    setShowEditForm(true);
  }

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditingTaskId(null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const updatedTask = await updateTask(newTask);
      const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = updatedTask;
      setTasks(updatedTasks);
      setShowEditForm(false);
      setNewTask({
        isChecked: false,
        tasks: "",
        startDate: "",
        dueDate: "",
        priority: 1
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      console.log(newTask); // add this line to log the newTask object
      const response = await createTask(newTask);
      setTasks([...tasks, response]);
      setShowForm(false);
      setNewTask({
        isChecked: false,
        tasks: "",
        startDate: "",
        dueDate: "",
        priority: 1
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchData();
  }, []);

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const response = await fetch("http://localhost:8000/api/tasks");
    const data = await response.json();
    setTasks(data);
  };

  return (
    <MDBTable align="middle">
      <MDBTableHead dark>
        <tr>
          <th scope="col">
            {showEditForm || showForm ? (
              ""
            ) : (
              <input className="form-check-input" type="checkbox" />
            )}
          </th>
          <th scope="col">Task</th>
          <th scope="col">Start Date</th>
          <th scope="col">Due Date</th>
          <th scope="col">Priority</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {showEditForm ? (
          <EditTaskForm
            task={newTask}
            handleCancelEdit={handleCancelEdit}
            setNewTask={setNewTask}
            handleSubmit={handleUpdate}
            isSubmitting={isSubmitting}
          />
        ) : (
          tasks.map((task) => (
            <TaskRow
              id={task.id}
              key={task.id}
              task={task}
              handleEdit={() => handleEditTask(task.id)}
              handleDelete={handleDeleteTask}
            />
          ))
        )}
        {showForm && (
          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            setShowForm={setShowForm}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </MDBTableBody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            <MDBBtn rounded className="create-btn" onClick={handleAddTask}>
              Add Task
            </MDBBtn>
          </td>
        </tr>
      </tfoot>
    </MDBTable>
  );
}
