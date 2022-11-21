import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/userSlice";
import { v4 as uuidv4 } from 'uuid';
function SignUpBookStore() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailcheck = useSelector((state)=>state.user)
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      comfirmPassWord: "",
      name:"",
    },
    validationSchema: Yup.object({

      password: Yup.string()
       .required("Chưa nhập mật khẩu")
    .min(6, "Mật khẩu quá ngắn - ít nhất phải 6 ký tự.")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số."),

      comfirmPassWord: Yup.string()
        .oneOf([Yup.ref("password")], "mật khẩu không khớp")
        .required("Chưa nhập mật khẩu"),

      email: Yup.string().email()
      .required("Không được để trống "),

      name: Yup.string()
      .min(3,"Tên quá ngắn - phải ít nhất 3 kí tự")
      .required("Không được để trống "),
    }),

    onSubmit: (values) => {
     toast("Đăng kí thành công")
     const newUser ={
      id:uuidv4(),
      name:values.name,
      email:values.email,
      password:values.password
     }
     dispatch(userActions.addUser(newUser))
     console.log(values)
    //  navigate("/signin")
    },
  })
  const onKeyUp = (e) => {
    if (e.charCode === 13) {
   
    }
}
  return (
    <>   <ToastContainer/>
      <form className="sign-in" onSubmit={formik.handleSubmit}>
     
        <input
          
          onKeyPress={(e)=>onKeyUp(e)}
          autoFocus
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          className="input-signin"
          placeholder="Vui Lòng Nhập Tên Người Dùng"
        /> {formik.touched.name && formik.errors.name ? (
          <div className="errorMsg">{formik.errors.name}</div>
        ) : null}

        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className="input-signin"
          placeholder="Vui Lòng Nhập Email"
        /> {formik.touched.email && formik.errors.email ? (
          <div className="errorMsg">{formik.errors.email}</div>
        ) : null}

        <input
          name="password"
          type="password"
          autoComplete="on"
          className="input-signin"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          placeholder="Vui Lòng Nhập Mật Khẩu"
        /> {formik.touched.password && formik.errors.password ? (
          <div className="errorMsg">{formik.errors.password}</div>
        ) : null}
        <input
          type="password"
          name="comfirmPassWord"
          className="input-signin"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.comfirmPassWord}
          onBlur={formik.handleBlur}
          placeholder="Vui Lòng Nhập Mật Khẩu"
        /> {formik.touched.comfirmPassWord && formik.errors.comfirmPassWord ? (
          <div className="errorMsg">{formik.errors.comfirmPassWord}</div>
        ) : null}
        <button type="submit" className="btn btn-sign">Đăng Kí</button>
        <span style={{ cursor: "pointer" }}>
          <FcGoogle />
          tai khoan gg
        </span>
        <Link to="/signin">
          <span>Đã Có Tài Khoản-Đăng Nhập Tài Khoản</span>
        </Link>
      </form>
    </>
  );
}

export default SignUpBookStore;
