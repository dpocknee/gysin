import React from 'react';
import Parser from 'html-react-parser';
import timeline from './data/timeline';
// import '../home/css/Home.css';
import './css/Timeline.css';

const Timeline = () => (
  <article>
    <h1 style={{ width: '80%' }}>
      Timeline Of Early Completist Permutation Works and Related Algorithms
    </h1>
    <div className="timeline">
      {timeline.map((date, index) =>
        date.position === 'year' ? (
          <h2 key={`timelineHeader${index}_${date.date}`}>{date.date}</h2>
        ) : (
          <div
            key={`timeline${index}_${date.date}`}
            style={{ width: '100%', display: 'flex', flexDirection: 'row' }}
          >
            <div style={{ width: '50%' }}>
              {date.position === 'left' && (
                <p>
                  <span className="year">{date.date}</span>{' '}
                  {Parser(date.content)}
                </p>
              )}
            </div>
            <div style={{ width: '50%' }}>
              {date.position === 'right' && (
                <p>
                  <span className="year">{date.date}</span>{' '}
                  {Parser(date.content)}
                </p>
              )}
            </div>
          </div>
        )
      )}
    </div>
  </article>
);

export default Timeline;
