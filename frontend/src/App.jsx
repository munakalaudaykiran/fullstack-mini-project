import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/facts/")
      .then((res) => res.json())
      .then((data) => setFacts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Facts List</h1>
      <ul>
        {facts.map((item) => (
          <li key={item.id}>{item.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
