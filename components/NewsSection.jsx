import React from "react";
import style from "../styles/schoolHighlights.module.css";

const NewsSection = () => {
  // Assuming you have an array of news articles
  const newsArticles = [
    {
      title: "School Carnival",
      date: "June 15, 2023",
      content:
        "Join us for our annual school carnival on June 15th. There will be games, food, and lots of fun activities for everyone!",
    },
    {
      title: "Science Fair Winners",
      date: "June 20, 2023",
      content:
        "Congratulations to our talented students who won the science fair competition. Their innovative projects impressed the judges!",
    },
    // Add more news articles as needed
  ];

  return (
    <section className={style.highlight}>
      <div className={style.container}>
        <h2 className={style.heading}>News Section</h2>
        <div className={style.card}>
          {newsArticles.map((article, index) => (
            <div key={index} className={style.card_body}>
              <h2 className={style.card_title}>{article.title}</h2>
              <h6 className={style.card_date}>{article.date}</h6>
              <p className={style.card_text}>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
