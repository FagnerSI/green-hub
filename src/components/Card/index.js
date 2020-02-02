import React from 'react';
import setSubstring from '../../common/setSubstring';
import './styles.css';

const Card = ({ item, icon }) => (
    <div className="card_container">
        <span className="name">{item.name}</span>
        <p>{setSubstring(item.description, 60)}</p>
        {icon && <span className="star" role="img" aria-label="emoji-de-estrela">{icon}</span>}
    </div >
);

export default Card;
