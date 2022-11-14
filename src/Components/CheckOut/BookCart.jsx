import React, { useEffect, useState } from "react";
import "./style.css";
import { cartActions } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
function BookCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
   console.log("cartitems", cartItems);
  const [totalPrice,setTotalPrice] = useState(0)
  // for(let i =1 ;i<=cartItems.length;i++){
  //   let a=[];
  //   a.push(cartItems[i].salePrice)
  //   console.log("a",a)
  //   console.log("citsp",cartItems[i].salePrice)
  // }
  return (
    <>
      <div className="container-cart">
        <h3>GIỎ HÀNG CỦA BẠN</h3>
        <ul className="responsive-table">
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
              <h3 >Tổng tiền :{totalPrice}</h3>
            </>
          )}
        
       
        </ul>
      
      </div>
    </>
  );
};
const CartItemBook = ({item,setTotalPrice,cartItems, totalPrice}) =>{
  const dispatch = useDispatch();
  const deleteBook = () =>{
    dispatch(cartActions.deleteItem(item.id))
    alert("Đã xóa sản phẩm")
  }
  const [quantityCart, setQuantityCart] = useState(item.quantity);
  const [total, setTotal] = useState(item.salePrice*item.quantity);
  useEffect(() => {
    const checkOut = () =>{
        let ttPrice = cartItems.reduce(
          (prev)=>
          prev + (total),0          
        )
        setTotalPrice(ttPrice)
       console.log(total)
    }
    checkOut();
   
  }, [total])
 
  
  const countDown = () =>{
    if(quantityCart>0){
     
      setQuantityCart(quantityCart-1);
      setTotal(total-item.salePrice)
    }
    else{
      setQuantityCart(0)
    }
  }
  const countUp = () =>{
    
    if(quantityCart<item.qtty)
    {
      setQuantityCart(quantityCart+1);
      console.log("total",total)
      console.log("quantitycart",quantityCart)
       setTotal(total+item.salePrice)
    }
    
    else{
      setQuantityCart(quantityCart)
    }
  }
  
  return (
    <>
      <li className="table-row">
        <div className="col col-1">{item.titleBook}</div>
        <div className="col col-6">
          {" "}
          <img
            className="image-cart"
            src={item.imgUrl}
            alt="imagecart"
          />{" "}
        </div>
        <div className="col col-2">
          {item.salePrice}
        </div>
        <div className="col col-3">
        <button 
                    disabled={quantityCart===1}
                    className="btncountcart"
                     onClick={countDown}>-</button>
          {quantityCart}
          <button 
                    disabled={quantityCart===item.qtty}
                    className="btncountcart" 
                    onClick={countUp}>+</button>
        </div>
        <div className="col col-4" >
          {total}
        </div>
        <div className="col col-5"  >
          <BsTrash onClick={deleteBook} className="icon-trash" />
        </div>
      </li>
     
    </>
  );
}

export default BookCart;
