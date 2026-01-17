import { useState } from 'react';
import Dashboard from './pages/dashboard';
import { HighImpact } from "./pages/logs";
import './App.css';
import Header from './pages/Header';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HighImpact />
      <br/>
    </>
  );
}

export default App;
