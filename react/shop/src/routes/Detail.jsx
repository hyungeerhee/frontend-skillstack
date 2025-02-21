import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../App.css'
import { addItem } from './../store.jsx'
import { useDispatch } from 'react-redux'

function Detail(props) {
  // let [count, setCount] = useState(0);
  let dispatch = useDispatch()
  let [alert, setAlert] = useState(true)
  let { id } = useParams()
  let find = props.shoes.find(function (x) {
    return x.id == id
  })
  // let [num, setNum] = useState("");
  let [탭, 탭변경] = useState(0)

  useEffect(() => {
    // 누가 Detail페이지 접속하면
    // 그 페이지에 보이는 상품id 가져와서
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(find.id)
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
    // localStorage에 watched 항목에 추가
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000)
  }, [])

  // useEffect(() => {
  //   if (isNaN(num) == true) {
  //     alert("그러지마세요");
  //   }
  // }, [num]);

  return (
    <div className="container ">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼{count}
      </button> */}
      <div className="row">
        <div className="col-md-6">
          <img src={find.url} width="100%" />
        </div>
        <div className="col-md-6 text-center">
          {/* <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          /> */}
          <h4 className="pt-5 fw-bold">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: find.id, name: find.title, count: 1 }))
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0)
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1)
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2)
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  )
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100)
    return () => {
      setFade('')
    }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  )
}
export { Detail }
