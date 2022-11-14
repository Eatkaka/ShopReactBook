import React from 'react'
import ApiListBook from "../FakeApi/ApiListBook";
import BookCard from '../Components/BookStore/BookCard';
import BannerBook from '../Components/BannerHeader/BannerBook'
import NewLetter from '../Components/NewLetter/NewLetter'

export default function HomeBookStore() {
  return (
    < >
        
        <div className='contentbody'>
        <BannerBook/>
        <div className="homebook">
        <h3>TỦ SÁCH</h3>
        <span
          style={{ width:"80%",
          marginLeft:"9%",
           fontSize: "2rem",
            fontWeight: "600" }}
        >
          SÁCH HOT NHẤT
        </span>

        <div className="listitembook">
          { ApiListBook.books.slice(0,15).map((item, index) => {
            return (
                 <BookCard item={item} key={item.id}    />         
            );
          })}
        </div>
      </div>
        <NewLetter/>
     
        </div>
    </>
  )
}
