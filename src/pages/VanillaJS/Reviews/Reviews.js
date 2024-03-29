import React, { useEffect } from "react";
import "./Reviews.style.css";
const reviews = [
  {
    id: 0,
    name: "오두콩",
    job: "Frontend Developer",
    img: "https://cdn.imweb.me/upload/S20221129c3c04fdc67a8b/16bc1ba7b6049.jpg",
    text: "안녕하세요. 프론트엔드 개발자 오두콩입니다~"
  },
  {
    id: 1,
    name: "리처드",
    job: "Frontend Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMbyL5kY6KoIeMJ7ckBEJzGdl0y1y_TuqAg&usqp=CAU",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "페클",
    job: "Frontend Developer",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMjAzMDVfMTIw/MDAxNjQ2NDkxNjEwNzIx.K3XZEylnk4H2N1dZJ3Om2X1oebrVAFvcF2meJyHFlPEg.yKiCkYH8g1b_FJz3jMGGT_kN4ZGsjMEHQTZiJ12JMQcg.PNG.tjgus2060/image.png?type=w800&jopt=2",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "농담곰",
    job: "Backend Developer",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMzExMDRfMzIg/MDAxNjk5MDg2MzgwMjUy.lJyAk6Jbofs0JCpCTJ_0i083P10f11VJO13QJC_Fo30g.nQQBaD5VI1MAuSRGSlRfN02Xt5Tj_ZcJmTIdO5NHpBQg.JPEG.ghkdwjdtka/download.jpg?type=w800",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "지지",
    job: "PM",
    img: "https://i.pinimg.com/736x/69/3b/61/693b61429f19d679eee1596ddad79dc3.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];
const Reviews = () => {
  useEffect(() => {
    // 사용되는 요소
    const img = document.getElementById("img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");

    var itemIndex = 0;

    // initial event
    window.addEventListener("DOMContentLoaded", function () {
      const item = reviews[itemIndex];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    });

    // new event
    function showPerson(person) {
      const item = reviews[person];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    }
    // 이전 버튼 누르기
    prevBtn.addEventListener("click", function () {
      itemIndex--;
      if (itemIndex < 0) itemIndex = reviews.length - 1;
      showPerson(itemIndex);
    });

    // 다음 버튼 누르기
    nextBtn.addEventListener("click", function () {
      itemIndex++;
      if (itemIndex > reviews.length - 1) {
        itemIndex = 0;
      }
      showPerson(itemIndex);
    });

    // 랜덤 프로필 보기
    randomBtn.addEventListener("click", function () {
      showPerson(Math.floor(Math.random() * reviews.length));
    });
  }, []);

  return (
    <main className="reviews">
      <section className="container-reviews">
        <div className="title-reviews">
          <h2>Reviews Page</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img
              src="https://cdn.imweb.me/upload/S20221129c3c04fdc67a8b/16bc1ba7b6049.jpg"
              id="img"
              alt=""
            />
          </div>
          <div className="content-container">
            <h4 id="author">오두콩</h4>
            <p id="job">Frontend Developer</p>
            <p id="info">안녕하세요. 프론트엔드 개발자 오두콩입니다~</p>
            <div className="buttons-container">
              <button className="prev-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M5 12l6 6" />
                  <path d="M5 12l6 -6" />
                </svg>
              </button>
              <button className="next-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </button>
            </div>
            <button className="random-btn">랜덤 프로필</button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Reviews;
