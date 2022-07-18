import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../store/actions/productsActions";
const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct =
    useSelector((state) => state.productDetails.product) || {};
  useEffect(() => {
    dispatch(productDetailsAction(productId));
  }, [productId ,dispatch]);

  //   setObject((prevState) => ({
  //     ...prevState,
  //     secondKey: 'value',
  //   }));
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
