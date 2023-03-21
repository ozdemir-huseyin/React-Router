import "./App.css";
import { Routes, Route } from "react-router-dom";
import Teacher from "./components/Teacher";
import Home from "./components/Home";
import Student from "./components/Student";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>

        <Route path="/teacher" element={<Teacher />}>
          {" "}
        </Route>
        <Route path="/student" element={<Student />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
