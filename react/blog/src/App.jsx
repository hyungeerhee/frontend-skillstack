import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let name = "ReactBlog";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(0);
  let [title, setTitle] = useState(0);
  let [btnDel, setBtnDel] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="container">
      <div className="header">{name}</div>
      {글제목.map(function (a, i) {
        return (
          <div className="content" key={i}>
            <h3>
              <span
                onClick={() => {
                  setTitle(i);
                  modal == 0 ? setModal(true) : setModal(0);
                }}
              >
                {글제목[i]}
              </span>
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h3>
            <br />
            <span>2월 17일 발행</span>
            <button
              className="delete"
              onClick={() => {
                let 글복사 = [...글제목];
                글복사.splice(i, 1);
                글제목변경(글복사);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {modal == true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}></Modal>
      ) : null}

      <div className="upload">
        <input
          type="text"
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let 글복사 = [...글제목];
            글복사.unshift(입력값);
            글제목변경(글복사);
          }}
        >
          글발행
        </button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: "skyblue" }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자추천 코트";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button> */}
    </div>
  );
}

export default App;
