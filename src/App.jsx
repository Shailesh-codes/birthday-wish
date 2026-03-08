import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Surprise from "../src/pages/surprise";
import Ekbaraur from "../src/pages/ekbaraur";
import Greeting from "../src/pages/greeting";
import "./index.css";
import Photo from "./pages/photo";
import Wish from "./pages/wish";
import Last from "./pages/last";
import End from "./pages/end";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ekbaraur" element={<Ekbaraur />} />
      <Route path="/surprise" element={<Surprise />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/wish" element={< Wish />} />
      <Route path="/last" element={<Last />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
}

export default App;
