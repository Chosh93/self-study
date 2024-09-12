import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./page/main/Main";
import AsyncPage from "./page/note/AsyncPage";
import ClassPage from "./page/note/ClassPage";
import ClosurePage2 from "./page/note/ClosuerPage2";
import ClosurePage from "./page/note/ClosurePage";
import FuncPage from "./page/note/FuncPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/async" element={<AsyncPage />} />
        <Route path="/funcPage" element={<FuncPage />} />
        <Route path="/classPage" element={<ClassPage />} />
        <Route path="/closurePage" element={<ClosurePage />} />
        <Route path="/closurePage2" element={<ClosurePage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
