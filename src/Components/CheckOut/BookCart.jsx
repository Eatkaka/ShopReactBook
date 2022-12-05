import React, { useEffect, useState } from "react";
import "./style.css";
import { cartActions } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function BookCart() {
  
  const {totalAmount,cartItems} = useSelector((state)=>state.cart)
   const [totalPrice,setTotalPrice] = useState(1)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(cartActions.getCartTotal());
  }, [cartItems]);
  
 
  return (
    <>
      <div className="container-cart">
        <h3>GIỎ HÀNG CỦA BẠN</h3>
        <ul className="responsive-table">
        <ToastContainer/>
          {cartItems.length === 0 ? (
            <h3>Không có sản phẩm trong giỏ hàng của bạn</h3>
          ) : (<>
            <li className="table-header">
              <div className="col col-1">Tên Sách</div>
              <div className="col col-6">Hình Ảnh</div>
              <div className="col col-2">Giá Sách</div>
              <div className="col col-3">Số Lượng</div>
              <div className="col col-4">Tổng Tiền</div>
              <div className="col col-5">Xóa Sản Phẩm</div>
            </li>
            {cartItems.map((item, index) => (
             <CartItemBook
             cartItems={cartItems}
             item={item} 
             key={index}
             totalPrice={totalPrice}
           
              setTotalPrice={setTotalPrice}/>
          )
          )}
              <h3 >Tổng tiền :{totalAmount.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}</h3>
            </>
          )}
        
       
        </ul>
      
      </div>
    </>
  );
};
const CartItemBook = ({item}) =>{
  let sumMoney = item.quantity*item.salePrice
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const deleteBook = () =>{
    toast("Đã Xóa Sản Phẩm")
    dispatch(cartActions.deleteItem(item.id))
   
  }
  const handleDetail = () =>{
     navigate(`/shop/${item.id}`)
  }
  return (
    <>
      <li className="table-row">
        <div className="col col-1"
        style={{cursor:"pointer"}}
        onClick={handleDetail}>{item.titleBook}</div>
        <div className="col col-6">
          {" "}
          <img
            className="image-cart"
            src={item.imgUrl}
            onClick={handleDetail}
            alt="imagecart"
          />{" "}
        </div>
        <div className="col col-2">
          {item.salePrice.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
        {/* {item.salePrice} */}
        </div>
        <div className="col col-3">
        <button 
                    className="btncountcart"
                    disabled={item.quantity===1}
                    onClick = {()=>dispatch(cartActions.countDown(item.id))}
                    >-</button>
          {item.quantity}
          <button 
                    disabled={item.quantity===item.qtty}
                    className="btncountcart" 
                    onClick={()=>dispatch(cartActions.countUp(item.id))}>+</button>
        </div>
        <div className="col col-4" >
          {sumMoney.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
        </div>
        <div className="col col-5"  >
          <BsTrash onClick={deleteBook} className="icon-trash" />
        </div>
      </li>
     
    </>
  );
}

export default BookCart;
