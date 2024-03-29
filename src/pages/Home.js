import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Home.style.css";
import Page from "./VanillaJS/page";
import MainButton from "component/Button/MainButton";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="home-title">Basic Web Projects</div>
        <div className="home-buttons">
          <MainButton title="Vanilla JS" onClick={() => navigate("vanilla")} />
          <MainButton title="React" onClick={() => navigate("react")} />
          <MainButton title="TypeScript" onClick={() => navigate("typescript")} />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="vanilla/*" element={<Page />} />
    </Routes>
  );
}
