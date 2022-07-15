import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product._id}`}>
            <strong>{product.name}</strong>
          </Link>
        </Card.Title>
        <Card.Text>
          <Rating numStars={product.rating} numReviews={product.numReviews} />
        </Card.Text>
        <Card.Text as={"h3"}>Price : ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
