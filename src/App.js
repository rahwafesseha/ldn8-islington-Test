
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Teacher from"./components/Teacher";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
