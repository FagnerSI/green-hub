import React from 'react';
import './styles.css';

const Perfil = ({ user }) => (
    <div className="perfil_container">
        <a href={user.html_url} target="blank">
            <img src={user.avatar_url} className="avatar" alt="imagem-perfil" />
        </a>
        <div className="user_name">{user.login}</div>
        <div className="bio">{user.bio}</div>
        <a href={user.html_url} target="blank">Visualizar Perfil</a>
    </div>
);

export default Perfil;
