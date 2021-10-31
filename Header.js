import React from 'react';
import logo from './img/laboi_logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="Header">
            <img src={logo} />
            <button name="homepage" style={{ marginLeft: "800px" }}> Homepage </button>
            <button name="Policy"  style={{ marginRight: "60px" }}> Policies </button>
            <button name="Contact" style={{ marginRight: "180px" }}> Contact Us </button>
      </div>       
    )
}