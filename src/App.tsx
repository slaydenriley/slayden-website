import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
