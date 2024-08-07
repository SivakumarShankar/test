import ReactDOM from "react-dom/client";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import NoPage from "./pages/error";
import Footer from "./pages/footer";
import Github from "./pages/github";
import Skills from "./pages/skills";
import Project from "./pages/project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
          <Route path="github" element={<Github />} />
          <Route path="skills" element={<Skills />} />
          <Route path="project" element={<Project />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);