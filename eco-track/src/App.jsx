import { useState } from 'react';
import { HighImpact } from "./pages/logs";
import Header from './pages/Header';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HighImpact />
    </>
  );
}

export default App;
