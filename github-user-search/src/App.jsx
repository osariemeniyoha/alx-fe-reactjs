import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
