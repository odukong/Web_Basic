import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ColorFlipper from "./ColorFlipper/ColorFlipper";
import Counter from "./Counter/Counter";
import Reviews from "./Reviews/Reviews";
import Navigation from "./Navigation/Navigation";

function VanillaPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style = "#fff";
  }, []);
  return (
    <>
      <div>바닐라 페이지</div>
      <button onClick={() => navigate("../colorFlipper")}>ColorFlipper</button>
      <button onClick={() => navigate("../counter")}>Counter</button>
      <button onClick={() => navigate("../reviews")}>Reviews</button>
      <button onClick={() => navigate("../navigation")}>Navigation</button>
    </>
  );
}

export default function Page() {
  return (
    <Routes>
      <Route path="/" exact element={<VanillaPage />} />
      <Route path="colorFlipper/*" element={<ColorFlipper />} />
      <Route path="counter/*" element={<Counter />} />
      <Route path="reviews/*" element={<Reviews />} />
      <Route path="navigation/*" element={<Navigation />} />
    </Routes>
  );
}