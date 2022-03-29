import { useState } from "react";
import FlushButton from "./components/flushButton/FlushButton";
import IndexPage from "./pages/IndexPage/IndexPage";

function App() {
  return (
    <div className="App">
      <header
        style={{
          margin: "4rem",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="App-header"
      >
        Pulmonaria🌼
        <FlushButton />
      </header>
      <div className="App-wrapper">
        <IndexPage />
      </div>
    </div>
  );
}

export default App;
