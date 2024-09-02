import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClassPage from "./page/ClassPage";
import ClosurePage2 from "./page/ClosuerPage2";
import ClosurePage from "./page/ClosurePage";
import FuncPage from "./page/FuncPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/funcPage" element={<FuncPage />} />
        <Route path="/classPage" element={<ClassPage />} />
        <Route path="/closurePage" element={<ClosurePage />} />
        <Route path="/closurePage2" element={<ClosurePage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
