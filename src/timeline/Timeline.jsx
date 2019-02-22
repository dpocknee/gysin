import React from 'react';
import Parser from 'html-react-parser';
import timeline from './data/timeline';
import './css/Timeline.css';

const Timeline = () => (
  <div>
    <header>
      <h2>Timeline Of Early Completist Permutation Works and Related Algorithms</h2>
    </header>
    <div className="timeline">
      {timeline.map(date => (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '50%' }}>
            {date.position === 'left' && (
              <p>
                <span className="year">{date.date}</span> {Parser(date.content)}
              </p>
            )}
          </div>
          <div style={{ width: '50%' }}>
            {date.forcePosition === 'right' && (
              <p>
                <span className="year">{date.date}</span> {Parser(date.content)}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
