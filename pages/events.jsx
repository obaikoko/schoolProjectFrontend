import React from 'react';
import style from '../styles/events.module.css';

function news() {
  return (
    <div>
      <section className={style.section}>
        <div className={style.imgBgA}>
          <div className={style.newsTxt}>
            <h1>Art Exhibition</h1>
            <p>Date: 1/1/2024</p>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <div className={style.imgBgB}>
          <div className={style.newsTxt}>
            <h1>Sport Day</h1>
            <p>Date: 23/4/2024</p>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.imgBgC}>
          <div className={style.newsTxt}>
            <h1>Parent-Teacher Conferences</h1>
            <p>Date: 10/3/2024</p>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.imgBgD}>
          <div className={style.newsTxt}>
            <h1>Literacy Week</h1>
            <p>Date: 3/2/2024</p>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.imgBgE}>
          <div className={style.newsTxt}>
            <h1>Cultural Day</h1>
            <p>Date: 4/3/2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default news;
