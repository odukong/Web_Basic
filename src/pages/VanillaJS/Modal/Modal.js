import React, { useEffect } from "react";
import "./Modal.style.css";

const Modal = () => {
  useEffect(() => {
    let openBtn = document.querySelector(".modal-btn");
    let closeBtn = document.querySelector(".modal-close-btn");
    let modal = document.querySelector(".modal-overlay");

    openBtn.addEventListener("click", () => {
      modal.classList.add("modal-open");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("modal-open");
    });

    return () => {
      openBtn.removeEventListener("click", () => {
        modal.classList.add("modal-open");
      });
      closeBtn.removeEventListener("click", () => {
        modal.classList.remove("modal-open");
      });
    };
  }, []);
  return (
    <>
      <div className="modal-bg">
        <div className="modal-banner">
          <h1>Modal Project</h1>
          <button className="btn modal-btn">클릭해보세요</button>
        </div>
      </div>
      <div className="modal-overlay">
        <div className="modal-container">
          <img src="/black_cat.ico" alt="cat" />
          <h3>애옹이다냥</h3>
          <button className="modal-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
