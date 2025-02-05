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

  return (
    <div className="container">
      <div className="header">{name}</div>
      {/* 
      <button style={{margin:"20px"}} onClick={()=>{
        let copy = [...a]; 
        copy.sort((c,d) => c.localeCompare(d, "ko-KR"));
        b(copy)
      }}>정렬버튼</button>


      <button style={{margin:"20px"}} onClick={()=>{
        let copy = [...a];
        copy[0] = '여자코트 추천'; 
        b(copy)
      }}>글 수정</button>
      
      <div className="content">
        <h3>{a[0]}<span onClick={() => {따봉변경(따봉+1)}}>👍</span>{따봉}</h3>    
        <br />
        <span>2월 17일 발행</span>
      </div>
      <div className="content">
        <h3>{a[1]}</h3>
        <br />
        <span>2월 17일 발행</span>
      </div>
      <div className="content">
        <h3>{a[2]}</h3>
        <br />
        <span className="span">2월 17일 발행</span>
      </div> */}
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
          </div>
        );
      })}

      {modal == true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}></Modal>
      ) : null}
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
