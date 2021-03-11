import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            // If there value is greater than or equal to 1, show star, else show half the star
            value >= 1
              ? "fas fa-star fa-sm"
              : value >= 0.5
              ? "fas fa-star-half-alt fa-sm"
              : "far fa-star fa-sm"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star fa-sm"
              : value >= 1.5
              ? "fas fa-star-half-alt fa-sm"
              : "far fa-star fa-sm"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star fa-sm"
              : value >= 2.5
              ? "fas fa-star-half-alt fa-sm"
              : "far fa-star fa-sm"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star fa-sm"
              : value >= 3.5
              ? "fas fa-star-half-alt fa-sm"
              : "far fa-star fa-sm"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star fa-sm"
              : value >= 4.5
              ? "fas fa-star-half-alt fa-sm "
              : "far fa-star fa-sm"
          }
        />
      </span>
      {/* If there is text show text else dont */}
      <span>{text && text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: "#cc4400",
};
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
