function Product(props) {
  return (
    <div className="col-md-4 text-center">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%" />
      <h4>{props.a.title}</h4>
      <p>{props.a.content}</p>
    </div>
  );
}

export { Product };
