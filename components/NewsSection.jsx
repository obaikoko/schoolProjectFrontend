import React from 'react';

const NewsSection = () => {
  // Assuming you have an array of news articles
  const newsArticles = [
    {
      title: 'School Carnival',
      date: 'June 15, 2023',
      content:
        'Join us for our annual school carnival on June 15th. There will be games, food, and lots of fun activities for everyone!',
    },
    {
      title: 'Science Fair Winners',
      date: 'June 20, 2023',
      content:
        'Congratulations to our talented students who won the science fair competition. Their innovative projects impressed the judges!',
    },
    // Add more news articles as needed
  ];

  return (
    <div className='container'>
      <h2>News Section</h2>
      <div className='row'>
        {newsArticles.map((article, index) => (
          <div key={index} className='col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{article.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {article.date}
                </h6>
                <p className='card-text'>{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
