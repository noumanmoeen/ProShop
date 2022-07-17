import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../components/Products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log("ERROR =====", err);
      });
  }, []);

  return (
    <>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
