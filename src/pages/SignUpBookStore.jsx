import React from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from "formik"

function SignUpBookStore() {
    
        const formik = useFormik({
            initialValues:{
                     
            }
        })
    return (
       <>
       <section className='sign-in'>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Tên Người Dùng'/>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Email'/>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Mật Khẩu'/>
        <input className='input-signin'
        placeholder='Vui Lòng Nhập Mật Khẩu'/>
        <button className='btn btn-sign'>Đăng Kí</button>
        <Link to='/signin'><span>Đã Có Tài Khoản-Đăng Nhập Tài Khoản</span></Link>
       </section>
       </> 
    )
}

export default SignUpBookStore
