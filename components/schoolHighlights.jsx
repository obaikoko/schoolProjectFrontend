import React from "react";
import style from "../styles/schoolHighlights.module.css";

const SchoolHighlights = () => {
  const highlights = [
    {
      title: "Award-Winning Education",
      description:
        "Recognized for excellence in academics and extracurricular activities.",
      icon: "trophy",
    },
    {
      title: "Diverse Learning Community",
      description:
        "Embracing cultural diversity and fostering inclusivity among students.",
      icon: "users",
    },
    {
      title: "Cutting-Edge Facilities",
      description:
        "State-of-the-art classrooms, laboratories, and sports facilities.",
      icon: "building",
    },
    // Add more highlights as needed
  ];

  return (
    <section className={style.highlight}>
      <div className={style.container}>
        <h2 className={style.heading}>Why Choose Our School?</h2>
        <div className={style.card}>
          {highlights.map((highlight, index) => (
            <div className={style.card_body} key={index}>
              <h3 className={style.card_title}>{highlight.title}</h3>
              <p className={style.card_text}>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolHighlights;
