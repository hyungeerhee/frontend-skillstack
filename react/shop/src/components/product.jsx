function Product(props) {
  return (
    <div className="col-md-4">
      <img src={props.a.url} width="80%" />
      <h4>{props.a.title}</h4>
      <p>{props.a.content}</p>
    </div>
  );
}

export { Product };
