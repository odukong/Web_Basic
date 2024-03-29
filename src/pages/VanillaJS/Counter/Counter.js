import React, { useEffect } from "react";
import "./Counter.style.css";
const Counter = () => {
  useEffect(() => {
    let count = 0;
    const value = document.getElementById("number");
    const btns = document.querySelectorAll(".btn");

    btns.forEach(function (btn) {
      console.log(btn);
      btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")) count--;
        else if (styles.contains("btn-increase")) count++;
        else count = 0;
        if (count > 0) {
          value.style.color = "green";
        } else if (count < 0) {
          value.style.color = "red";
        } else {
          value.style.color = "#222";
        }
        value.textContent = count;
      });
    });
  }, []);

  return (
    <>
      <main className="counter">
        <h1>숫자 카운터</h1>
        <span id="number">0</span>
        <div className="button-container">
          <button className="btn btn-decrease">감소</button>
          <button className="btn btn-reset">초기화</button>
          <button className="btn btn-increase">증가</button>
        </div>
      </main>
    </>
  );
};

export default Counter;
