import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Work from "./pages/Work";
import Art from "./pages/Art";
import Palette from "./pages/Palette";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  // useEffect(() => {
  //   document.title = "Tony's Webstie";
  //   const link = document.querySelector("link[rel~='icon']");
  //   if (link) link.href = "./pages/Home"; // Change favicon (ensure correct path)
  // }, []);

  if (isLanding) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    );
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/work" element={<Work />} />
          <Route path="/art" element={<Art />} />
          <Route path="/palette" element={<Palette />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
