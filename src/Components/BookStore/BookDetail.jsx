/* eslint-disable eqeqeq */
import NavbarBook from "../Navbar/NavbarBook";
import { useParams } from "react-router-dom";
import ApiListBook from "../../FakeApi/ApiListBook";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";


import "./style.css";
import { useState } from "react";
function Book() {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const addToCart = () => {
    const newBookCart = {
      id,
      titleBook,
      imgUrl,
      salePrice,
      quantity,
      qtty,
    }
  dispatch(
      cartActions.addItem(newBookCart
       )
     )
     
};
const countDown = () =>{
  if(quantity>0){
  setQuantity(quantity-1)}
  else{
    setQuantity(0)
  }
}
const countUp = () =>{
  if(quantity<qtty){
  setQuantity(quantity+1)}
  else{
    setQuantity(quantity)
  }
}

let result =  ApiListBook.books.find((item) => item.id === Number(id));
const {imgUrl,salePrice,titleBook,descriptions,category,qtty}=result;

  return (
    <>
      <NavbarBook />
          return (
            <>
               <div className="bookdetail" >
                <img
                  alt="imagebookdetail"
                  className="imagebookdetail"
                  src={imgUrl}
                />
                <div className="detailright">
                  <span 
                  className="booknamedetail">{titleBook}</span>
                  <span className="bookpricedetail">
                    {" "}
                    Giá tiền : {`  `}
                    {salePrice}
                  </span>
                  <span className="bookdescdetail">{descriptions}</span>
                  <span className="bookcategorydetail">
                    Thể Loại: {category}
                  </span>
                  <span className="bookqualitydetail">
                    Số lượng sản phẩm :
                    <button 
                    disabled={quantity===0}
                    className="btncount"
                     onClick={countDown}>-</button>
                    {quantity}
                    <button 
                    disabled={quantity===qtty}
                    className="btncount" 
                    onClick={countUp}>+</button>
                  </span>
                  <div style={{ display: "flex", justifyItems: "flex-start" }}>
                    <button
                      onClick={addToCart}
                      className="btn addcart"
                      style={{ borderRadius: "50px" }}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <AiFillHeart className="heart-wishlist" />
                  </div>
                </div>
              </div> 
            </>
          );
        

      <span className="RelatedBooks">sachs lien qua</span>
    </>
  );
}

export default Book;
