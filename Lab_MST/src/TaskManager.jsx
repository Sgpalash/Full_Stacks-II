import React, { useState } from "react";
import { useForm } from "./useForm";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low",
  });

  const handleSubmit = (e) => {
  e.preventDefault();

  const cleanTitle = values.title.trim();

  if (!cleanTitle) return;

  setTasks((prev) => [
    ...prev,
    { ...values, title: cleanTitle },
  ]);

  resetForm();
};

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>EcoTrack Task Manager</h2>

    
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={values.title}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        <button type="submit" style={styles.button}>
          Add Task
        </button>
      </form>

      
      <div style={styles.list}>
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center" }}>No tasks yet</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} style={styles.taskItem}>
              <span>{task.title}</span>
              <span style={getPriorityStyle(task.priority)}>
                {task.priority}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


const getPriorityStyle = (priority) => {
  const colors = {
    Low: "#4caf50",
    Medium: "#ff9800",
    High: "#f44336",
  };

  return {
    background: colors[priority],
    color: "white",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  };
};


const styles = {
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "380px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2ecc71",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  list: {
    marginTop: "20px",
  },

  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
};

export default TaskManager;