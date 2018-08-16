import React from 'react';
import Comments from '../components/Comments';
import data from '../data/comments';
import './main.css';

const Main = () => (
  <React.Fragment>
    <div className="wrapper">
      <section className="about">
        <div className="about__photo">
          <img
            src="../images/avatar.jpg"
            alt="Вероника Ростова"
          />
        </div>
        <div className="about__info">
          <h1 className="about__name">Вероника Ростова</h1>
          <div className="about__job">Менеджер по продажам</div>
          <p className="about__description">Подберу для вас самые лучшие предложения.
            <br/>
            Мои услуги абсолютно бесплатны
          </p>
          <div className="about__services">
            <header className="services__header">Услуг</header>
            <ul className="services__types">
              <li className="services__name">Ручное бронирование <span>11</span></li>
              <li className="services__name services__name_tours">Пакетные туры <span>3</span></li>
              <li className="services__name services__name_hotels ">Отели <span>1</span></li>
            </ul>
            <footer className="services__total">Всего <span>15</span></footer>
          </div>
        </div>
      </section>
      <section className="reviews">
        <header className="reviews__header">
          <h3>Последние отзывы</h3>
          <a className="reviews__link" href="">Все отзывы</a>
          <div className="reviews__icons-container">
            <div className="reviews__icon reviews__icon_likes">131</div>
            <div className="reviews__icon reviews__icon_comments">14</div>
          </div>
        </header>
      </section>
    </div>
    <Comments comments={data} />
  </React.Fragment>
);
export default Main;
