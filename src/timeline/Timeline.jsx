import React from 'react';
import timeline from './data/timeline';

const Timeline = () => (
  <div>
    <h1>Timeline Of Early Completist Permutation Works and Related Algorithms</h1>
    <div style={{ width: '100%' }}>
      {timeline.map(date => (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '50%' }}>
            {date.forcePosition === 'left' && <p>{`${date.label} - ${date.shortContent}`}</p>}
          </div>
          <div style={{ width: '50%' }}>
            {date.forcePosition === 'right' && <p>{`${date.label} - ${date.shortContent}`}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
