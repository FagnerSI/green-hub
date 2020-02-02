import React from "react";
import "./styles.css";

const Pin = ({ avatar }) => (
    <div className="pin_container">
        <img src={avatar} alt="icon" />
    </div>
);

export default Pin;