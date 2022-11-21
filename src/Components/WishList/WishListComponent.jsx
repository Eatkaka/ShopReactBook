import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { wlActions } from "../../redux/wishListSlice";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function WishListComponent() {
  const BookWL = useSelector((state) => state.wishList.bookWL);
  // console.log(BookWL)

  return (
    <div className="container-cart">
      <h3>DANH SÁCH YÊU THÍCH</h3>
      <ul className="responsive-table">
        {BookWL.length === 0 ? (
          <h3>Không có sản phẩm trong giỏ hàng của bạn</h3>
        ) : (
          <>
            <li className="table-header">
              <div className="col col-6">Hình Ảnh</div>
              <div className="col col-2">Giá Sách</div>
              <div className="col col-5">Xóa Sản Phẩm</div>
            </li>

            {BookWL.map((item, index) => (
              <BookWLItem item={item} key={index} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
            }
const BookWLItem = ({ item }) => {
  const navigate = useNavigate();
  const routerShop = () => {
    navigate(`/shop/${item.id}`);
  };
  const dispatch = useDispatch();
  const deleteBook = () => {
    dispatch(wlActions.deleteItem(item.id));
    toast("Đã xóa sản phẩm khỏi danh sách yêu thích")
  };

  return (
    <li className="table-row">
      <ToastContainer/>
      <div
        onClick={routerShop}
        className="col col-1"
        style={{ cursor: "pointer" }}
      >
        {item.titleBook}
      </div>
      <div className="col col-6">
        {" "}
        <img
          onClick={routerShop}
          className="image-cart"
          src={item.imgUrl}
          alt="imagecart"
        />{" "}
      </div>
      <div className="col col-2">{item.salePrice}</div>
      <div className="col col-5">
        <BsTrash onClick={deleteBook} className="icon-trash" />
      </div>
    </li>
  );
};

export default WishListComponent;
