import React from "react";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import Data from "./data.js";
export default function App() {
  const data = Data.map((item) => {
    return <Journal item={item} />;
  });
  return (
    <div>
      <Navbar />
      {data}
    </div>
  );
}
