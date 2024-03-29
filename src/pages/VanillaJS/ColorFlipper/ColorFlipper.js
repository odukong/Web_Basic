import React, { useEffect } from "react";
import "./ColorFlipper.style.css";

const HexColorFlipper = () => {
  useEffect(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");
    function getRandomNumber() {
      return Math.floor(Math.random() * hex.length);
    }

    btn.addEventListener("click", function () {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
      }
      document.body.style.background = hexColor;
      color.textContent = hexColor;
    });
  }, []);

  return (
    <>
      <main className="flipper">
        <div className="container-flipper">
          <h2>
            background color : <span className="color">#f1f5f8</span>
          </h2>
          <button className="btn btn-hero" id="btn">
            click me
          </button>
        </div>
      </main>
    </>
  );
};

const SimpleColorFlipper = () => {
  useEffect(() => {
    const colors = ["green", "pink", "red", "#ffaa11", "#f6f3a9"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    function getRandomNumber() {
      return Math.floor(Math.random() * colors.length);
    }

    btn.addEventListener("click", function () {
      const randomNumber = getRandomNumber();
      console.log(randomNumber);
      document.body.style.background = colors[randomNumber];
      color.textContent = colors[randomNumber];
    });
  });

  return (
    <>
      <main className="flipper">
        <div className="container-flipper">
          <h2>
            background color : <span className="color">#f1f5f8</span>
          </h2>
          <button className="btn btn-hero" id="btn">
            click me
          </button>
        </div>
      </main>
    </>
  );
};

const ColorFlipper = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Color Flipper</h3>
          <ul className="nav-links">
            <li>
              <a href="/vanilla/colorFlipper">simple</a>
            </li>
            <li>
              <a href="/vanilla/colorFlipper/hex">hex</a>
            </li>
          </ul>
        </div>
      </nav>
      {window.location.pathname.split("/").at(-1) != "hex" ? (
        <SimpleColorFlipper />
      ) : (
        <HexColorFlipper />
      )}
    </>
  );
};

export default ColorFlipper;
