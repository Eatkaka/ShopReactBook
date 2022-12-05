import NavbarBook from "../Navbar/NavbarBook";
import { useParams } from "react-router-dom";
import ApiListBook from "../../FakeApi/ApiListBook";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import {  useState } from "react";
import { wlActions } from "../../redux/wishListSlice";
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
  
const changeWishLish = () => {
    const newWL = {
      
      rsColor:"#FF0000",
      id,
      titleBook,
      imgUrl,
      salePrice,
    };
    dispatch(wlActions.changeWL(newWL));     
}

 

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