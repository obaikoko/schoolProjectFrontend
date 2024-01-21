import React from 'react';
import style from '../styles/about.module.css';

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.imgBg}></div>
      <div className={style.aboutTxt}>
        <h1>Bondonalds Internation Secondary School</h1>
        <p>
        Welcome to Bendonalds International
          Secondary School, where education transcends boundaries! Renowned for
          academic brilliance, our school embraces cutting-edge facilities,
          holistic development, and a global perspective. With innovative
          teaching methods, a supportive community, and a celebration of
          diversity, BendoNation is not just a school; it's a vibrant ecosystem
          nurturing tomorrow's leaders. Join us on an unparalleled educational
          journey where excellence knows no bounds!
          
        </p>
      </div>
    </div>
  );
};

export default About;
