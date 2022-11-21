/* eslint-disable eqeqeq */
import NavbarBook from "../Navbar/NavbarBook";
import { useParams } from "react-router-dom";
import ApiListBook from "../../FakeApi/ApiListBook";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { wlActions } from "../../redux/wishListSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import HeartWishList from "../WishList/HeartWishList";
function Book() {
  let { id } = useParams();
  let result = ApiListBook.books.find((item) => item.id === Number(id));
  const { imgUrl, salePrice, titleBook, descriptions, category, qtty, amount } =
    result;
  const [quantity, setQuantity] = useState(amount);
  const dispatch = useDispatch();
 

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  const countUp = () => {
    if (quantity < qtty) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };
  const addToCart = () => {
    toast("Đã thêm sản phẩm vào giỏ hàng ");
    const newBookCart = {
      id,
      titleBook,
      imgUrl,
      salePrice,
      quantity,
      qtty,
    };
    dispatch(cartActions.addItem(newBookCart));
  };
  const [isColor, setIsColor] = useState(false);
  // const [rsColor,setRsColor]=useState("#333333")
 
const changeWishLish = () => {
  setIsColor(!isColor)  
  // console.log("first",isColor)
  if(isColor){
    const newWL = {
      isColor,   
      id,
      titleBook,
      imgUrl,
      salePrice,
    };
    toast("Đã Xóa Khỏi Danh Sách Yêu Thích")
    // console.log("01",newWL)
    dispatch(wlActions.changeWL(newWL));
  } else{
    const newWL = {
      rsColor:"#FF0000",
      isColor,
      id,
      titleBook,
      imgUrl,
      salePrice,
    };
    toast("Đã Thêm Vào Danh Sách Yêu Thích")
    // console.log(newWL)
    dispatch(wlActions.changeWL(newWL));
  }

 
};
   return (
    <>
      <NavbarBook />
      <ToastContainer style={{ marginTop: "130px" }} />
      return (
      <>
        <div className="bookdetail">
          <img alt="imagebookdetail" className="imagebookdetail" src={imgUrl} />
          <div className="detailright">
            <span className="booknamedetail">{titleBook}</span>
            <span className="bookdescdetail">{descriptions}</span>
            <span className="bookcategorydetail">Thể Loại: {category}</span>
            <span className="bookqualitydetail">
              Số lượng sản phẩm :
              <button
                disabled={quantity === 1}
                className="btncount"
                onClick={countDown}
              >
                -
              </button>
              {quantity}
              <button
                disabled={quantity === qtty}
                className="btncount"
                onClick={countUp}
              >
                +
              </button>
            </span>
            <div style={{ display: "flex", justifyItems: "flex-start" }}>
              <button
                onClick={addToCart}
                className="btn addcart"
                style={{ borderRadius: "50px" }}
              >
                Thêm vào giỏ hàng
              </button>
              <div onClick={()=>changeWishLish()}>
              <HeartWishList id={id}/>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    
    </>
  );
}

export default Book;
