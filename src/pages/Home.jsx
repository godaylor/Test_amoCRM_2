import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="leftSide">
        <h1>
          Зарабатывайте больше <br />
          <b className="gradient"> с WELBEX</b>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="rightSide">
        <h2>
          Вместе c{' '}
          <b className="gradient">
            БЕСПЛАТНОЙ <br />
            КОНСУЛЬТАЦИЕЙ
          </b>{' '}
          мы дарим:
        </h2>
        <ul className="ulDesc">
          <li>
            <h2>Виджеты</h2>
            <p>30 готовых решений</p>
          </li>
          <li>
            <h2>Dashboard</h2>
            <p>с показателями вашего бизнеса</p>
          </li>
          <li>
            <h2>Skype Аудит</h2>
            <p>отдела продаж и CRM системы</p>
          </li>
          <li>
            <h2>35 дней</h2>
            <p>использования CRM</p>
          </li>
        </ul>
        <ul className="ulMobile">
          <li>
            <svg
              className="gradientSmallLine"
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            Skype аудит
          </li>
          <li>
            <svg
              className="gradientSmallLine"
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            30 виджетов
          </li>
          <li>
            <svg
              className="gradientSmallLine"
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            Dashboard
          </li>
          <li>
            <svg
              className="gradientSmallLine"
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            Месяц аmoCRM
          </li>
        </ul>
        <button className="button">Получить консультацию</button>
      </div>
    </div>
  );
};

export default Home;
