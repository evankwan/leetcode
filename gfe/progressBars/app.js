import { useState, useEffect } from "react";

function ProgressBar() {
  const [fillClasses, setFillClasses] = useState("progressBarFill");
  useEffect(() => {
    setFillClasses((prev) => {
      return prev + " progressBarFillFull";
    });
  }, []);
  return (
    <div className="progressBar">
      <div className={fillClasses}></div>
    </div>
  );
}

export default function App() {
  const [bars, setBars] = useState([]);
  const handleAdd = () => {
    setBars((prev) => {
      return [...prev, <ProgressBar />];
    });
  };
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <div className="container">{bars}</div>
    </div>
  );
}
