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
        <Route path="/Personal_Website/" element={<Home />} />
        <Route path="/Personal_Website/projects" element={<Project />} />
        <Route path="/Personal_Website/work" element={<Work />} />
        <Route path="/Personal_Website/art" element={<Art />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
