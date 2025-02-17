import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge, addCount } from "./../store.jsx";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <div></div>
      <h6 className="d-flex justify-content-center">
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        className="d-block mx-auto"
        onClick={() => {
          dispatch(changeAge(2));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map(function (a, i) {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(a.id));                      
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
