import React from "react";
import { BiSend } from "react-icons/bi";
import './style.css'


export default function NewLetter() {
  return (

      <div className="contentletter" >
        <span className="desc">Newsletter</span>
        <span className="desc">
          Get timely updates from your favorite products.
        </span>
        <div className="contentinput">
          <input className="inputyourmail" placeholder="Your email" />
          <button className="send">
            <BiSend />
          </button>
        </div>
      </div>
 
  );
}
