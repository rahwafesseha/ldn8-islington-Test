import React, { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName}/>} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
