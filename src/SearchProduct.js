import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

const SearchProduct = () => {
  const [data, setData] = useState([]);

  const search = async (key) => {
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  };
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Search Product"
          onChange={(e) => search(e.target.value)}
        />
        <br />
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://localhost:8000/" + item.file_path}
                />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default SearchProduct;
