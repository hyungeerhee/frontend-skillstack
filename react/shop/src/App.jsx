import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/bg.png";
import data from "./utils/data.jsx";
import { useState } from "react";
import { Product } from "./components/product.jsx";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./routes/Detail.jsx";
// import {Product} from './product.jsx';
function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Product a={a}></Product>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div className="event">
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
