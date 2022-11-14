import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";
function BookCard({ item }) {
 
  const navigate = useNavigate();
  const routerShop = () => {
    navigate(`/shop/${item.id}`);
  };
  return ( 
        <div className="cardbook" onClick={routerShop}>  
          <Card.Img className="imagebook" variant="top" src={item.imgUrl} />
          <div className="subcard">
            <Card.Title className="cardtitle">{item.titleBook}</Card.Title>
            <Card.Title className="cardprice">{item.salePrice}</Card.Title>
          </div>
          <Card.Title className="showcart">xem chi tiết sản phẩm</Card.Title>
        </div>

  );
}

export default BookCard;
