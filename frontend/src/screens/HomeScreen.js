import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAction } from "../store/actions/productsActions";

const HomeScreen = () => {
  //   const [products, setproducts] = useState([]);
  const products = useSelector((state) => state.productsList.products) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);

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
