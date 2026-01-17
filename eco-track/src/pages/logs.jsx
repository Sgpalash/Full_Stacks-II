export const logs = [
  { id: 1, activity: "Car Travel", carbon: 4 },
  { id: 2, activity: "Electricity Usage", carbon: 6 },
  { id: 3, activity: "Cycling", carbon: 0 },
  { id: 4, activity: "Public Transport", carbon: 12 },
  { id: 5, activity: "Meat Consumption", carbon: 5 },
  { id: 6, activity: "Plant-based Meal", carbon: 2 },
  { id: 7, activity: "Air Travel", carbon: 1 }
];

export const HighImpact = () => {
  const highCarbonLogs = logs.filter(log => log.carbon <= 4);

  return (
    <div style={{ color: "red", padding: "20px", backgroundColor: "#000000" }}>
      <h2 style={{color:"#f8950bff"}}>Daily Logs</h2>
        <p style={{ color: "skyblue" }}>These are the given carbon emmission</p>
      <ul>
        {highCarbonLogs.map(log => (
          <li key={log.id} style={{
              color: log.carbon < 4 ? "lightgreen" : "red"
            }}>
            {log.activity} : {log.carbon} kgs
          </li>
        ))}
      </ul>
    </div>
  );
};