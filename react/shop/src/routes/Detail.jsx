import { useState } from "react";
import { useParams } from "react-router-dom";
function Detail(props) {
  let { id } = useParams();
  let find = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
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
    </div>
  );
}

export { Detail };
