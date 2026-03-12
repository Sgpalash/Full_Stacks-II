import React from "react";
import TaskManager from "./TaskManager";

function App() {
  return (
    <div style={styles.container}>
      <TaskManager />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f7fb",
  },
};

export default App;