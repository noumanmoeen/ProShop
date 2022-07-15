import React from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../components/Products";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={item}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
