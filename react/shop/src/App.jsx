import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import bg from './img/bg.png'
import data from './utils/data.jsx'
import { useState, useEffect } from 'react'
import { Product } from './components/product.jsx'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Detail } from './routes/Detail.jsx'
import axios from 'axios'
import Cart from './routes/Cart.jsx'
import { useQuery } from 'react-query'
// import {Product} from './product.jsx';
function App() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  let obj = { name: 'kim' }
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()

  let result = useQuery(
    '작명',
    () => {
      return axios
        .get('https://codingapple1.github.io/userdata.json')
        .then((a) => {
          console.log(a.data)
          return a.data
        })
    },
    { staleTime: 2000 } 
  )

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart')
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto text-white">
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
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
                style={{ backgroundImage: 'url(' + bg + ')' }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Product a={a} i={i + 1} key={i}></Product>
                  })}
                </div>
                <button
                  onClick={() => {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data]
                        setShoes(copy)
                      })
                  }}
                  className="d-flex mt-4 mx-auto"
                >
                  더보기
                </button>
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

function Event() {
  return (
    <div className="event">
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}
export default App
