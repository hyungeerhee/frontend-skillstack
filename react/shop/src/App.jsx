import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/bg.png";
import data from "./data.jsx";
import { useState } from "react";
import { Product } from "./product.jsx";
// import {Product} from './product.jsx';
function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {shoes.map(function (a) {
            return <Product a={a}></Product>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
