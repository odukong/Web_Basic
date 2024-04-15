import React, { useEffect } from "react";
import "./QA.style.css";

const DATA = [
  { Q: "떡볶이가 먹고 싶은데..있나요", A: "없습니다. 돌아가세요" },
  { Q: "공부안하고 살기. 불가능할까요?", A: "네. 위 분이랑 손잡고 같이 가세요" },
  { Q: "김토비가 귀여운데 정상인가요?", A: "지극한 정상." }
];

const QACard = ({ question, answer }) => {
  return (
    <article className="question-card">
      <div className="question-card_title">
        <p>{question}</p>
        <button type="button" className="question-card_btn">
          <span className="plus-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </span>
          <span className="minus-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-minus">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
            </svg>
          </span>
        </button>
      </div>
      <div className="question-card_text">
        <p>{answer}</p>
      </div>
    </article>
  );
};

const QA = () => {
  useEffect(() => {
    const questions = document.querySelectorAll(".question-card");
    questions.forEach(function (question) {
      const btn = question.querySelector(".question-card_btn");

      btn.addEventListener("click", function () {
        questions.forEach(function (item) {
          if (item !== question) {
            // click 이벤트가 일어나지 않은 요소는 메뉴 hidden
            item.classList.remove("show-text");
          }
        });
        question.classList.toggle("show-text");
      });
    });

    return () => {
      questions.forEach(function (question) {
        const btn = question.querySelector(".question-card_btn");

        btn.addEventListener("click", function () {
          questions.forEach(function (item) {
            if (item !== question) {
              item.classList.remove("show-text");
            }
          });
          question.classList.toggle("show-text");
        });
      });
    };
  }, []);

  return (
    <section className="question">
      <div className="question-title">
        <h2>QA Board</h2>
      </div>
      <div className="question-center">
        {DATA.map((data, idx) => (
          <QACard key={idx} question={data.Q} answer={data.A} />
        ))}
      </div>
    </section>
  );
};

export default QA;
