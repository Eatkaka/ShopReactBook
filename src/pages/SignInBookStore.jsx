import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup'
function SignInBookStore() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema: Yup.object({
       email: Yup.string().email('Invalid email address').required('Required'),}),
    onSubmit: values => {
        localStorage.setItem("accessToken",true)
        navigate("/")
    },
  });


  return (
    <>
      <form className="sign-in"  onSubmit={formik.handleSubmit}>
        <input
          autoFocus
          autoComplete="true"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className="input-signin"
          placeholder="Vui Lòng Nhập Email"
        />
         {formik.touched.email && formik.errors.email ? (
         <div className="errorMsg" >{formik.errors.email}</div>
       ) : null}
        <input
          name="password"
          type="password"
          className="input-signin"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Vui Lòng Nhập Mật Khẩu"
        />
         {formik.touched.email && formik.errors.email ? (
         <div className="errorMsg" >{formik.errors.password}</div>
       ) : null}
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
