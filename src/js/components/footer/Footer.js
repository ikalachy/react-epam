import React, { Component } from "react";

const Footer = (props) =>
    <footer>
        <p className="text-center"> copyright (c) 2020</p>
        {props.children}
    </footer>

export default Footer