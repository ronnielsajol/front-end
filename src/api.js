import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/tasks");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (newTask) => {
  try {
    const response = await axios.post("http://localhost:8000/api/tasks", {
      ...newTask,
      priority: parseInt(newTask.priority)
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (taskId, callback) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/tasks/${taskId}`
    );
    if (callback) callback(response.data); // execute the callback function if it is provided
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/tasks/${task.id}`,
      task,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
