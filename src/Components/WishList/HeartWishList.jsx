import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function HeartWishList({ id }) {
  let bookWL = useSelector((state) => state.wishList.bookWL);
 
  let result = bookWL?.find((item) => item.id === id);
  // console.log("helo",result)
   let rsColor = useRef("#333333");
   if(result?.rsColor){
    rsColor=result.rsColor
    toast("Thêm vào danh sách yêu thích");
   }else{
    rsColor=rsColor.current
     
   }
   
  
  
  
   console.log("first",rsColor)
  return (
    <div>
        <ToastContainer style={{ marginTop: "130px" }} />
      <div className="focus-heart">
        {}
        <AiFillHeart
          style={{
            color: `${rsColor}`,
            width: "3em",
            height: "3em",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}