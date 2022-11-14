import React from 'react'
import { Link } from 'react-router-dom'

function SignInBookStore() {
    return (
        <section className='sign-in'>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Tên Người Dùng'/>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Mật Khẩu'/>
        <button className='btn btn-sign'>Đăng Nhập</button>
         <Link to ='/signup'>
          <span> Chưa Có Tài Khoản -Tạo tài khoản Mới</span></Link> 
        <span>Quên Mật Khẩu</span>
       </section>
        
    )
}

export default SignInBookStore
