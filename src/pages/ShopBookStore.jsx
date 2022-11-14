import React, { useState } from "react";
import ApiListBook from "../FakeApi/ApiListBook";
import { getCategory } from "../FakeApi/configApi";
import BookCard from "../Components/BookStore/BookCard";
import { BiSearch } from "react-icons/bi";
import freeship from '../asset/image/freeship.png'
function ShopBookStore() {
  const [data, setData] = useState(ApiListBook.books);

  const resultDataCategory = getCategory();
 
  const handleCategory = (e) => {
    let valueCategory = e.target.value;
    let resultDataCategory;
    if (valueCategory === "sách thiếu nhi") {
      resultDataCategory = ApiListBook.books.filter(
        (item) => item.category === "sách thiếu nhi"
      );
    } else if (valueCategory === "truyện tranh") {
      resultDataCategory = ApiListBook.books.filter(
        (item) => item.category === "truyện tranh"
      );
    } else if (valueCategory === "sách giáo dục") {
      resultDataCategory = ApiListBook.books.filter(
        (item) => item.category === "sách giáo dục"
      );
    } else if (valueCategory === "Danh mục sách") {
      resultDataCategory = ApiListBook.books;
    }
    setData(resultDataCategory);
  };
  
  const handlePrice = (e) => {
    let valuePrice = e.target.value;
     let apiBookCopy = [...ApiListBook.books];
     console.log(apiBookCopy)
     let resultDataPrice
    if (valuePrice === "0") {
        resultDataPrice = apiBookCopy.sort(function (a, b) {
        return a.salePrice - b.salePrice;
      });
      console.log("rsl dta",resultDataPrice)
    } 
    else if (valuePrice === "1") {
      resultDataPrice = apiBookCopy.sort(function (a, b) {
        return b.salePrice - a.salePrice;
      });
    }
    else if (valuePrice === "2")
    ( resultDataPrice = ApiListBook.books)
    
    setData(resultDataPrice)
  };
 
  const handleSearch = (e) => {
    const searchKey = e.target.value;
    // console.log(searchKey)
    const resultSearch = ApiListBook.books.filter((item) =>
      item.titleBook.toLowerCase().includes(searchKey.toLowerCase())
    );
    // console.log(resultSearch)
    setData(resultSearch);
  };
  return (
    <>
      <img src={freeship} className="advimage" alt="adimage"/>
      <div className="containershop">
        <select onChange={(e) => handleCategory(e)}>
          <option className="cardtitle">Danh mục sách</option>
          {resultDataCategory.map((el, index) => {
            return (
              <option name={el} key={index} >
                {el}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => handlePrice(e)}>
          <option value="2" >Giá</option>
          <option value="0" >
            Giá : từ thấp đến cao
          </option>
          <option value="1" >
            Giá : Từ cao đến thấp
          </option>
        </select>
        <button className="btn1">Top Yêu Thích</button>
        <button className="btn1">Mới Nhất</button>

        <div className="search">
        <input
          className="inputsearch"
          type="text"
          placeholder="Search on"
          onChange={(e) => handleSearch(e)}
        />
        <BiSearch className="iconsearch" />
       </div>
      </div>
      <div className="contentbook">
        <div className="listitembook">
          {data?.length === 0 ? (
            <div>Không Có Quyển Sách Này</div>
          ) : (
            data?.map((item, index) => {
              return <BookCard item={item} key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ShopBookStore;
