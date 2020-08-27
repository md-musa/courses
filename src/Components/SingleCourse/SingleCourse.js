import React from "react";
import "./SingleCourse.css";

const SingleCourse = (props) => {
  const {course, instructor, price, img} = props.data;
  return (
    <div className="course-card">
      <div className="img-div">
        <img className="course-img" src={img}></img>
      </div>

      <div className="information">
        <h6>{course}</h6>
        <h6 className="text-secondary">{instructor}</h6>
        <span className="star">
          <span className="text-danger">5.0 </span> ⭐⭐⭐⭐
          <span className="text-secondary">(3000)</span>
        </span>

        <h6 className="text-secondary">Price : {price}$</h6>
        <button
          onClick={() => props.sendToCartFunc(props.data)}
          className="enroll-btn btn btn-outline-primary"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default SingleCourse;
