import React from "react";

import Logo from "../../../img/Logo.png";

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="headerBody">
        <img className="headerLogo" src={Logo} alt="Logo" />

        <div className="headerLink">
          <div className="headerLinkItem">Главная</div>
          <div className="headerLinkItem">Сеансы</div>
          <div className="headerLinkItem">Отзывы</div>
          <div className="headerLinkItem">Контакты</div>
          <div className="headerLinkItem">Новости</div>
          <div className="headerLinkItem">Обо мне</div>
          <div className="headerLinkItem">Блог</div>
        </div>

        <button className="headerButton">Записаться на сеанс</button>
      </div>
    </header>
  );
}

export default Header;
