import React from 'react';

const Header = () => {
  return (
    <div className="header_and_text">
      <div className="header">
        <div className="fullLogo">
          <div className="logoText">крупный интегратор CRM в Росcии и ещё 8 странах</div>
          <a href="/" className="logo">
            <svg
              width="140"
              height="24"
              viewBox="0 0 140 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_0_31)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M45.0018 5L51.2891 17.5571L50.4983 19.1196L43.1697 5H45.0018ZM65.3871 5L58.1163 19.1196L50.4598 5H52.2341L58.1163 16.051C58.412 15.4861 58.7463 14.8367 59.1191 14.1025C59.492 13.3682 59.8681 12.6121 60.2474 11.8339C60.6267 11.0557 61.0028 10.287 61.3756 9.52769C61.7484 8.76837 62.086 8.07494 62.3881 7.4474C62.6903 6.81986 62.9442 6.28646 63.1499 5.84718C63.3556 5.4079 63.4906 5.12551 63.5549 5H65.3871ZM79.2619 6.37431V5H69.9275V19.1384H79.2619V17.7642H71.3547V12.7752H77.9505V11.4009H71.3547V6.37431H79.2619ZM83.4167 19.1384V5H84.8438V17.7642H92.7511V19.1384H83.4167ZM96.9058 5V19.1384H103.829C103.932 19.1384 104.161 19.1039 104.514 19.0349C104.868 18.9658 105.25 18.8121 105.662 18.5737C105.855 18.4607 106.057 18.3132 106.269 18.1313C106.481 17.9492 106.671 17.7265 106.838 17.4629C107.005 17.1993 107.143 16.8887 107.253 16.5311C107.362 16.1733 107.417 15.756 107.417 15.2791C107.417 14.7394 107.346 14.2687 107.205 13.8671C107.063 13.4655 106.883 13.1204 106.665 12.8317C106.446 12.543 106.198 12.3108 105.922 12.1351C105.646 11.9594 105.366 11.8213 105.083 11.7209C105.366 11.4448 105.61 11.0652 105.816 10.582C106.022 10.0988 106.124 9.51828 106.124 8.84053C106.124 8.3385 106.07 7.90551 105.961 7.54153C105.851 7.17756 105.713 6.86379 105.546 6.60023C105.379 6.33666 105.192 6.11702 104.987 5.94131C104.781 5.7656 104.582 5.62126 104.389 5.50831C104.17 5.3828 103.961 5.28553 103.762 5.2165C103.563 5.14747 103.383 5.09727 103.222 5.06589C103.061 5.03451 102.929 5.01569 102.827 5.00941C102.724 5.00314 102.666 5 102.653 5H96.9058ZM103.791 17.7642C103.842 17.7642 103.984 17.7422 104.215 17.6982C104.447 17.6543 104.694 17.5508 104.958 17.3877C105.221 17.2244 105.456 16.9766 105.662 16.6439C105.867 16.3114 105.97 15.8564 105.97 15.2791C105.97 14.7017 105.867 14.2468 105.662 13.9142C105.456 13.5816 105.221 13.3306 104.958 13.1611C104.694 12.9917 104.443 12.885 104.206 12.8411C103.968 12.7972 103.823 12.7752 103.772 12.7752H98.333V17.7642H103.791ZM103.068 11.3256C102.843 11.3758 102.704 11.4009 102.653 11.4009H98.333V6.37431H102.653C102.679 6.37431 102.801 6.39313 103.019 6.43078C103.238 6.46844 103.476 6.56571 103.733 6.72259C103.99 6.87948 104.225 7.12422 104.437 7.45681C104.649 7.78941 104.755 8.25065 104.755 8.84053C104.755 9.41788 104.656 9.87597 104.456 10.2148C104.257 10.5537 104.032 10.811 103.781 10.9867C103.531 11.1624 103.293 11.2754 103.068 11.3256ZM121.639 5V6.37431H113.731V11.4009H120.327V12.7752H113.731V17.7642H121.639V19.1384H112.304V5H121.639ZM132.331 13.1141L137.153 19.1384H139.043L133.431 12.0598L139.043 5H137.153L132.331 11.0244L127.78 5H125.639L131.251 12.0598L125.639 19.1384H127.78L132.331 13.1141Z"
                  fill="#E4E5EA"
                />
              </g>
              <g clipPath="url(#clip1_0_31)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.5946 0H0V12.7841H1.3208V1.28886H23.2738V5.52746H21.0842V5.53671H21.0684C21.0096 5.65146 20.8861 5.90965 20.698 6.31127C20.5098 6.7129 20.2776 7.20058 20.0012 7.77434C19.7249 8.34809 19.4162 8.98207 19.0752 9.67634C18.7342 10.3706 18.3901 11.0734 18.0433 11.7848C17.6964 12.4963 17.3524 13.1876 17.0114 13.859C16.6704 14.5302 16.3647 15.1241 16.0941 15.6404L10.7143 5.53671H9.09151L16.0941 18.446L22.1009 6.7853H24.5927V6.77176H24.5946V0ZM0 17.1961H0.00609518V17.1819H8.47042L2.42401 5.53671H4.0997L9.84995 17.0175L9.1268 18.446L9.1157 18.4247V18.4398H1.3208V22.7111H23.2738V11.1838H24.5946V24H0V17.1961ZM33.6949 24V0H35.0517V24H33.6949Z"
                  fill="#E4E5EA"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_31">
                  <rect width="97" height="15" fill="white" transform="translate(43 5)" />
                </clipPath>
                <clipPath id="clip1_0_31">
                  <rect width="35" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Виджеты</a>
          </li>
          <li>
            <a href="/">Интеграции</a>
          </li>
          <li>
            <a href="/">Кейсы</a>
          </li>
          <li className="last">
            <a href="/">Сертификаты</a>
          </li>
        </ul>
        <div className="media">
          <a href="tel:+75555555555" className="tel">
            +7 555 555-55-55
          </a>
          <ul className="contacts">
            <li className="telegram">
              <a href="/">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.2208 0.0975332L1.44582 5.79503C0.437482 6.20003 0.443316 6.76253 1.26082 7.01337L5.05415 8.1967L13.8308 2.6592C14.2458 2.4067 14.625 2.54253 14.3133 2.8192L7.20248 9.2367H7.20082L7.20248 9.23753L6.94082 13.1475C7.32415 13.1475 7.49332 12.9717 7.70831 12.7642L9.55082 10.9725L13.3833 13.8034C14.09 14.1925 14.5975 13.9925 14.7733 13.1492L17.2892 1.29253C17.5466 0.260033 16.895 -0.207467 16.2208 0.0975332Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </a>
            </li>
            <li className="viber">
              <a href="/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.77419 0C8.48914 0 8.25806 0.219525 8.25806 0.490323C8.25806 0.76112 8.48914 0.980645 8.77419 0.980645C12.1948 0.980645 14.9677 3.61494 14.9677 6.86452C14.9677 7.13531 15.1988 7.35484 15.4839 7.35484C15.7689 7.35484 16 7.13531 16 6.86452C16 3.07335 12.7649 0 8.77419 0Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M2.1673 1.59966C2.45986 1.4568 2.97514 1.3844 3.27048 1.64579C3.63965 1.97253 4.20861 2.54529 4.59951 3.04502C4.9904 3.54475 5.53764 4.30588 5.61582 4.47502C5.694 4.64416 5.78086 5.24384 5.38997 5.60518C5.07726 5.89425 4.669 6.15104 4.50395 6.2433C4.35049 6.37143 4.09917 6.74764 4.32154 7.22738C4.59951 7.82706 5.19887 9.00335 6.23256 9.87979C7.26625 10.7562 8.36074 11.2175 9.04698 11.3636C9.09061 11.3636 9.14667 11.3735 9.21164 11.385C9.44413 11.426 9.79062 11.4872 10.0894 11.1868C10.3951 10.8793 10.6742 10.5564 10.7756 10.4333C10.9348 10.2693 11.3975 9.9905 11.9743 10.1873C12.6953 10.4333 13.5205 10.9715 13.894 11.2252C14.1928 11.4282 14.8582 11.9095 15.1536 12.1247C15.3331 12.2554 15.6331 12.6445 15.3968 13.1549C15.1014 13.7931 13.8419 15.2 12.7127 15.2C12.2957 15.2 8.26519 14.116 4.70374 11.0561C2.42881 9.10153 0.47054 5.71025 0.134663 4.56728C0.00726174 4.29563 -0.143304 3.62625 0.273647 3.12191C0.690597 2.61756 1.15968 2.09169 2.1673 1.59966Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M8.77419 3.92258C8.48914 3.92258 8.25806 4.14211 8.25806 4.4129C8.25806 4.6837 8.48914 4.90323 8.77419 4.90323C9.91439 4.90323 10.8387 5.78133 10.8387 6.86452C10.8387 7.13531 11.0698 7.35484 11.3548 7.35484C11.6399 7.35484 11.871 7.13531 11.871 6.86452C11.871 5.23973 10.4845 3.92258 8.77419 3.92258Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M8.25806 2.45161C8.25806 2.18082 8.48914 1.96129 8.77419 1.96129C11.6247 1.96129 13.9355 4.15654 13.9355 6.86452C13.9355 7.13531 13.7044 7.35484 13.4194 7.35484C13.1343 7.35484 12.9032 7.13531 12.9032 6.86452C12.9032 4.69813 11.0546 2.94194 8.77419 2.94194C8.48914 2.94194 8.25806 2.72241 8.25806 2.45161Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </a>
            </li>
            <li className="whatsapp">
              <a href="/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6687 2.32548C12.9307 1.58614 12.0527 0.999906 11.0854 0.60073C10.1181 0.201554 9.08084 -0.0026233 8.03371 2.54441e-05C3.64281 2.54441e-05 0.0683305 3.55666 0.0665556 7.92847C0.0665556 9.32569 0.433055 10.6893 1.12967 11.8923L0 16L4.22318 14.8969C5.39135 15.5298 6.70011 15.8616 8.03016 15.8622H8.03371C12.4237 15.8622 15.9982 12.3056 16 7.93377C16.003 6.89203 15.7985 5.86002 15.3984 4.8974C14.9982 3.93478 14.4104 3.06063 13.6687 2.32548ZM8.03371 14.5242H8.03104C6.84504 14.5243 5.68086 14.2067 4.66067 13.6048L4.41929 13.4617L1.91325 14.1161L2.58147 11.6847L2.4244 11.4356C1.76132 10.385 1.4103 9.16917 1.41187 7.92847C1.41364 4.29501 4.3838 1.33895 8.03637 1.33895C8.90625 1.33703 9.76788 1.50683 10.5714 1.83853C11.3749 2.17023 12.1043 2.65725 12.7174 3.27138C13.3339 3.88259 13.8224 4.60933 14.1549 5.4096C14.4875 6.20986 14.6573 7.06779 14.6547 7.93377C14.6529 11.5672 11.6827 14.5242 8.03371 14.5242ZM11.6659 9.588C11.4662 9.4882 10.4883 9.00951 10.3055 8.94327C10.1236 8.87703 9.99133 8.84435 9.85822 9.04218C9.72511 9.24002 9.34352 9.68603 9.22727 9.81851C9.11102 9.95099 8.99477 9.96689 8.79599 9.86797C8.59721 9.76905 7.95561 9.55974 7.1951 8.88498C6.6032 8.35947 6.20387 7.71121 6.08762 7.51249C5.97137 7.31377 6.0752 7.2069 6.17547 7.10799C6.2651 7.01967 6.37425 6.87659 6.47364 6.76089C6.57303 6.64519 6.60587 6.56305 6.67242 6.43057C6.73898 6.29809 6.70614 6.1824 6.65556 6.08348C6.60587 5.98368 6.20742 5.00863 6.04147 4.61207C5.88085 4.22788 5.71668 4.27911 5.59422 4.27381C5.46739 4.26865 5.34046 4.26629 5.21352 4.26674C5.11258 4.2693 5.01327 4.29259 4.9218 4.33515C4.83033 4.3777 4.74868 4.4386 4.68196 4.51404C4.49916 4.71276 3.98535 5.19145 3.98535 6.1665C3.98535 7.14155 4.69883 8.08392 4.79821 8.2164C4.8976 8.34888 6.2021 10.3493 8.19876 11.2078C8.67441 11.4118 9.04535 11.5337 9.33376 11.6255C9.8103 11.7766 10.2442 11.7545 10.5877 11.7041C10.9701 11.6476 11.7653 11.2254 11.9312 10.7626C12.0971 10.2999 12.0971 9.9033 12.0475 9.82028C11.9978 9.73726 11.8638 9.68692 11.6659 9.588Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
