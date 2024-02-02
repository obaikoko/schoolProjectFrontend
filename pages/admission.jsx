import Head from 'next/head';
import style from '../styles/admission.module.css';

function admission() {
  return (
    <div className={style.admission}>
      <Head>
        <title>Bendonalds</title>
      </Head>
      <div className={style.imgBg}>
        <div className={style.img}></div>
      </div>
      <div className={style.admissionTxt}>
        <h1>ADMISSION</h1>
        <h2>
          Explore a world of possibilities at Bendonalds International Secondary
          School!
        </h2>
        <p>
          Welcome to a place where education transcends boundaries, guided by
          the visionary Mrs. Agiye Esther. Our admission doors are open to
          aspiring students eager to embark on a transformative academic
          journey. At Bendonalds, we believe in cultivating not just knowledge
          but fostering a passion for learning. Mrs. Esther's commitment to
          academic excellence and personalized attention ensures that each
          student receives the support they need to thrive. Join our diverse
          community of learners and discover a dynamic curriculum that prepares
          you for success in an ever-evolving world. From innovative teaching
          methods to a rich tapestry of extracurricular activities, our school
          offers a holistic education experience. Enroll now to be part of
          Bendonalds International Secondary School, where dreams take flight,
          and futures are shaped. Together, let's unlock your potential and pave
          the way for a bright tomorrow!
        </p>
      </div>
    </div>
  );
}

export default admission;
