import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let name = "ReactBlog";
  let [a, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let[따봉, 따봉변경] = useState(0);
  return (
    <div className="container" >
      <div className="header">{name}</div>

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
      </div>
      <Modal></Modal>
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
