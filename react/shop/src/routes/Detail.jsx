import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [count, setCount] = useState(0);

  let { id } = useParams();
  let find = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [num, setNum] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(1);
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼{count}
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={find.url} width="100%" />
        </div>
        <div className="col-md-6">
        <input onChange={ (e) => { setNum(e.target.value) } } />
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export { Detail };
