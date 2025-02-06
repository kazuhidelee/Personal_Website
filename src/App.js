import "./App.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Work from "./pages/Work";
import Art from "./pages/Art";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/work" element={<Work />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
