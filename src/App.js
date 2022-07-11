import React from "react";
import "./App.css";
import "./components/Quiz.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./components/Teacher";
import Footer from "./components/Footer";
import Form from "./components/Form"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/quiz" element={<Quiz />} exact />
          <Route path="/teacher" element={<Teacher />} exact />
        </Routes>
      </div>
      <Form/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
