import React from "react";
import PropTypes from "prop-types";

const Rating = ({ numStars, numReviews , color }) => {
  const ratings = [];
  ratings.length = 5;
  ratings.fill(0, 0, 5);
  let halfStar = false;
  return (
    <div className="rating">
      {ratings.map((item, index) => {
        const remainder = Math.trunc(numStars);
        const decimal = numStars % 1;
        if (index + 1 <= remainder)
          return (
              <i  style={{color}} className={"fas fa-star"}></i>
          );
        else if (decimal === 0.5 && index + 1 >= remainder && !halfStar) {
          halfStar = true;
          return (
              <i style={{color}} className={"fas fa-star-half-alt"}></i>
          );
        }
        return (
            <i style={{color}} className={"far fa-star"}></i>
        );
      })}
      <span>{numReviews} Reviews</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e285",
};

Rating.propTypes = {
  numStars: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  color: PropTypes.string,
};
export default Rating;
