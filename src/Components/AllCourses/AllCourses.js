import React, {useState} from "react";
import "./AllCourses.css";
import SingleCourse from "../SingleCourse/SingleCourse";
import Cart from "../Cart/Cart";
import fakeData from "../../fakeData/fakeData";

const AllCourses = () => {
  const [sendCourseToCart, setsendCourseToCart] = useState([]);
  const sendToCartFunc = (singleData) => {
    const newData = [...sendCourseToCart, singleData];
    setsendCourseToCart(newData);
  };

  // Calculating total price
  let totalPrice = sendCourseToCart.reduce((total, current) => {
    return total + current.price;
  }, 0);

  return (
    <div className="main-container">

      {/* -------All courses component  */}
      <div className="all-courses-container">
        {
          fakeData.map(data => <SingleCourse data={data} sendToCartFunc={sendToCartFunc}></SingleCourse>)
        }
      </div>
     
     {/* --------Cart component */}
      <div className="cart-container">
 
        <div className="addedCourseLen">
          <h5>Total added Course : {sendCourseToCart.length}</h5>
        </div>

        {
          sendCourseToCart.map((addedCourse) => <Cart addedCourse={addedCourse}></Cart>)
        }  
        
        {/* Total price here */}
        <div className="totalPrice justify-content-around bg-light">
          <h5>Total price : {totalPrice}$ </h5>
        </div>
      </div>
    </div>
  );
};
 
export default AllCourses; 
