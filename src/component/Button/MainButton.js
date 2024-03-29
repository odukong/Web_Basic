import React from "react";
import "./MainButton.style.css";
export default function MainButton({ title, onClick }) {
  const imgUrl = title => {
    switch (title) {
      case "Vanilla JS": {
        return "https://velog.velcdn.com/images/soo2283/post/95cc9159-6375-4f5a-9af3-6cd364f4efba/image.png";
      }
      case "React": {
        return "https://miro.medium.com/v2/resize:fit:1200/1*K0a7xINk0RM5gfXGSN68cw.png";
      }

      case "TypeScript": {
        return "https://process.filestackapi.com/output=format:png/compress/VIF9M8ebQjukQ4oqAkdP";
      }
    }
  };
  return (
    <div className="MainButton-container" onClick={onClick} role="presentation">
      <div className="button-img-box">
        <img src={imgUrl(title)} alt="img" />
      </div>
      <div>{title}</div>
    </div>
  );
}
