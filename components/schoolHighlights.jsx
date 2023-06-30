import React from 'react';

const SchoolHighlights = () => {
  const highlights = [
    {
      title: 'Award-Winning Education',
      description:
        'Recognized for excellence in academics and extracurricular activities.',
      icon: 'trophy',
    },
    {
      title: 'Diverse Learning Community',
      description:
        'Embracing cultural diversity and fostering inclusivity among students.',
      icon: 'users',
    },
    {
      title: 'Cutting-Edge Facilities',
      description:
        'State-of-the-art classrooms, laboratories, and sports facilities.',
      icon: 'building',
    },
    // Add more highlights as needed
  ];

  return (
    <section className='school-highlights py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Why Choose Our School?</h2>
        <div className='row'>
          {highlights.map((highlight, index) => (
            <div className='col-md-4' key={index}>
              <div className='card mb-4'>
                <div className='card-body text-center'>
                  <i
                    className={`fas fa-${highlight.icon} fa-3x mb-3 text-primary`}
                  ></i>
                  <h3 className='card-title'>{highlight.title}</h3>
                  <p className='card-text'>{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolHighlights;
