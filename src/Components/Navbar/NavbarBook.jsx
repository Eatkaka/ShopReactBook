import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './style.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { useSelector } from "react-redux";
import logo from '../../asset/image/logo.png'

export default function NavbarBook() {
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("accessToken")
    navigate("/signin")
  }
  const totalQuantity = useSelector( state => state.cart.totalQuantity)
  return (
      <Navbar className="navbar navbar-expand-lg navbar-light">
        <Container>
          <Nav className="stylenavbar" activeclassname="active">
             <Link to="/">TRANG CHỦ</Link>
          </Nav>
          <Nav className="stylenavbar " activeclassname="active">
          <Link to="/shop">CỬA HÀNG</Link>
          </Nav>         
          <Nav className="stylenavbar " activeclassname="active">
            <Link to="/about-us">GIỚI THIỆU </Link>
          </Nav>
          <div className="logo">
            <img  className="logoimage" src={logo} alt="logo"/>
          </div>
         
          <Nav className="stylenavbar " activeclassname="active">
            <Link to="/cart">GIỎ HÀNG</Link>
          </Nav>
          <Nav className="stylenavbar " activeclassname="active">
            <Link to="/wish-list">SÁCH YÊU THÍCH</Link>
          </Nav>
          <Nav className="stylenavbar " activeclassname="active">
            
              <MdAccountCircle className="navaccount"/>
              <div className="login"><Link to="/signin"><span>login</span></Link>
              <span onClick={logout}>logout</span></div>
            
          </Nav>
          <Nav className="stylenavbar " activeclassname="active">
            <Link to="/cart">
              <div className="cart">
              <BsCart4 className="navcart "/>
              <span className="showquality">{totalQuantity}</span>
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
