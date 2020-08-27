import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const {course, price, img} = props.addedCourse;
  return (
    <div className="cart-item">
      <div className="img">
        <img className="cart-img" src={img}></img>
      </div>

      <div className="course-information align-items-center">
        <p>{course}</p>
      </div>

      <div className="price d-flex align-items-center">
        <h5>{price}$</h5>
      </div>
    </div>
  );
};

export default Cart;
