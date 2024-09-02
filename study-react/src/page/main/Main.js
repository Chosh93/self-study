import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <Link to="/funcPage">함수</Link>
      </div>
      <div>
        <Link to="/classPage">클래스</Link>
      </div>
      <div>
        <Link to="/closurePage">클로저1</Link>
      </div>
      <div>
        <Link to="/closurePage2">클로저2</Link>
      </div>
    </div>
  );
};
export default Main;
