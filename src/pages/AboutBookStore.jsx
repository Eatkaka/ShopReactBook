import React from "react";


export default function AboutBookStore() {
  return (
    <>
  
      <div className="introduce">
        <h3>About Us</h3>
        <p>
          Cửa hàng sách EATKAKA luôn là cửa hàng được các độc giả yêu sách truy
          cập nhiều nhất và yêu thích nhất hiện tại. Cửa hàng không chỉ đã thành
          lập trên 10 năm mà còn có một số lượng lớn khách hàng thân thiết. Tự
          hào là nơi cung cấp sách rẻ và khách hàng yêu thích vào mỗi tháng
          chúng tôi luôn có những chương trình khuyến mãi cho quý khách quý
          khách có thể ghé trực tiếp cửa hàng của chúng tôi và tìm mua những
          quyển sách yêu thích với giá cả hợp lí
        </p>
        </div>
        <div className="thankyou">
          <div className="formattext">
            <span className="titlethank">
              Cảm Ơn Độc Giả Đã Yêu Mến Và Đồng Hành Cùng BOOKSTORE EATKAKA
              Trong Hơn 10 Năm
            </span>
          </div>
        </div>
     
      <div className="sendquestion">
        <form className="formsend">
          <div className="nameemail">
          <label>
            NAME:
            <input placeholder="Name" type="text" name="name"
            className="search" />
          </label>
          <label style={{marginLeft:"20px"}}>
            EMAIL:
            <input placeholder="Email" 
            type="text" name="name"  className="search"/>
          </label>
          </div>
          <label>
            TITLE:
            <input placeholder="Title"
            className="search"
            type="text" name="name" />
          </label>
          <textarea
            className="message"
            placeholder="You write"
           
            rows="10"
            cols="10"
          />
          <button className="btn1">SubMit</button>
          
        </form>
      </div>

  
    </>
  );
}
