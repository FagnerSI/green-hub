import React from 'react';
import setSubstring from '../../common/setSubstring';
import './styles.css';

const Card = ({ item, icon }) => (
    <div className="card_container">
        <spn className="name">{item.name}</spn>
        <p>{setSubstring(item.description, 80)}</p>
        {icon && <span className="star" role="img" aria-label="emoji-de-estrela">{icon}</span>}
    </div >
);

export default Card;
