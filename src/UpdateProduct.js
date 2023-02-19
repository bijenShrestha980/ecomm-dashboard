import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";

const UpdateProduct = (props) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  });
  return (
    <div>
      <Header />
      <h1>Update Product</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" defaultValue={data.name} className="form-control" />
        <br />
        <br />
        <input type="text" defaultValue={data.price} className="form-control" />
        <br />
        <br />
        <input
          type="text"
          defaultValue={data.description}
          className="form-control"
        />
        <br />
        <br />
        <input
          type="file"
          defaultValue={data.file_path}
          className="form-control"
        />
        <br />
        <br />
        <img
          style={{ width: 100 }}
          src={"http://localhost:8000/" + data.file_path}
          alt=""
        />
        <br />
        <br />
        <button className="update">Update Product</button>
      </div>
    </div>
  );
};

export default withRouter(UpdateProduct);
