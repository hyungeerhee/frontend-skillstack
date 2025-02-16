import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state);

  return (
    <div>
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
                <td>변경하기</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
