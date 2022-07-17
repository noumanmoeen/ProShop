import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
const ProductScreen = () => {
  const { id: productId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        setSelectedProduct(res.data);
      })
      .catch((err) => {
        console.log("ERROR =====", err);
      });
  }, []);

  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <>
      <Link className="btn btn-light my -3" to={"/"}>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={selectedProduct.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{selectedProduct.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                numStars={selectedProduct.rating}
                numReviews={selectedProduct.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${selectedProduct.price}</ListGroup.Item>
            <ListGroup.Item>
              <p>{selectedProduct.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>${selectedProduct.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {selectedProduct.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="p-2">
                  {" "}
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={selectedProduct.countInStock > 0 ? false : true}
                  >
                    Add to cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
