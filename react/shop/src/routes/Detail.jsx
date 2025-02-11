import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Detail(props) {
  // let [count, setCount] = useState(0);

  let { id } = useParams();
  let find = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {setAlert(false)}, 2000);
  });
  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={find.url} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {/* <button onClick={() => {setCount(count + 1)}}>버튼</button> */}
    </div>
  );
}
export { Detail };
