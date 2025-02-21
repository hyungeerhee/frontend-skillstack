import { useNavigate } from 'react-router-dom'
function Product(props) {
  let navigate = useNavigate()
  return (
    <div className="col-md-4 text-center" onClick={() => navigate(`/detail/${props.a.id}`)}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
        width="80%"
        
      />
      <h4>{props.a.title}</h4>
      <p>{props.a.content}</p>
    </div>
  )
}

export { Product }
