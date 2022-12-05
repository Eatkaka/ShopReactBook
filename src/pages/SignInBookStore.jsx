import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
function SignInBookStore() {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user.users)
  const [userItem, setUserItem] = useState({
    email:"",
    password:""
  })
  const handleAccount = ( e) =>{
    setUserItem({
      email:e.target.value,
      password:e.target.name
    })
  }
  console.log(userItem)
  const navigate = useNavigate();
 const handleSubmit = () =>{
  
 }


  return (
    <>
      <form className="sign-in"  onSubmit={handleSubmit}>
        <input
          autoComplete="true"
          type="email"
          name="email"
          onChange={(e)=>handleAccount(e)}
          className="input-signin"
          placeholder="Vui Lòng Nhập Email"
        />
         
        <input
          autoComplete="true"
          name="password"
          type="password"
          className="input-signin"
          onChange={(e)=>handleAccount(e)}
          placeholder="Vui Lòng Nhập Mật Khẩu"
        />
        <button type="submit" className="btn btn-sign">Đăng Nhập</button>
        <Link to="/signup">
          <span> Chưa Có Tài Khoản -Tạo tài khoản Mới</span>
        </Link>
        <span>Quên Mật Khẩu</span>
        <span style={{ cursor: "pointer" }}>
          <FcGoogle  />
          tai khoan gg
        </span>
      </form>
    </>
  );
}

export default SignInBookStore;
