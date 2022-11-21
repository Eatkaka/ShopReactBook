import React from "react";
import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
export default function HeartWishList({ id }) {
  let bookWL = useSelector((state) => state.wishList.bookWL);

  let result = bookWL?.find((item) => item.id === id);

  let rsColor = result?.rsColor;
  return (
    <div>
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
