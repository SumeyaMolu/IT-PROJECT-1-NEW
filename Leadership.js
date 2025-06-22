// Leadership.js
import React from 'react';

function Leadership() {
  return (
    <div className="content">
      <div className="left-section">
        <h1>What is Leadership?</h1>
        <p>
          Leadership is all about guiding, influencing, and inspiring people or teams to hit common goals. It is about making
          smart decisions, encouraging teamwork, and helping others release their full potential. Strong leadership is super
          important for any organization because it drives growth, builds a positive vibe, and helps everyone reach their best.
          Great leaders not only have vision but also empower others to lead in their own unique ways.
        </p>
        <h2>Inspirational Story</h2>
        <img src="your-image-url.jpg" alt="Inspirational Image" className="picture" />
        <p className="story">
          Once, a young leader faced a daunting challenge. With determination and a clear vision, they rallied their team,
          fostering trust and collaboration. Together, they overcame obstacles and achieved remarkable success, proving that
          true leadership lies in empowering others.
        </p>
      </div>

      <div className="right-section">
        <h1>Leadership Training Opportunities</h1>
        <ul className="training-list">
          <li><a href="https://example.com/training1">Leadership Essentials Course</a></li>
          <li><a href="https://example.com/training2">Advanced Leadership Workshop</a></li>
          <li><a href="https://example.com/training3">Executive Leadership Program</a></li>
          <li><a href="https://example.com/training4">Team Building and Leadership Retreat</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Leadership;

