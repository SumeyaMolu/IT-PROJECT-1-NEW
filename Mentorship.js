// Mentorship.js
import React from 'react';

function Mentorship() {
  return (
    <div className="content">
      <div className="left-section">
        <h1>Why Mentorship Matters</h1>
        <p>
          Mentorship is a powerful way to support growth, learning, and personal development.<br />
          Through guidance, encouragement, and experience-sharing, mentors help individuals build confidence,
          navigate challenges, and reach their goals.<br />
          Whether you are starting your journey or aiming higher, having a mentor can make a meaningful difference.
        </p>
        <h2>Real Mentorship Experience</h2>
        <img src="your-mentorship-image.jpg" alt="Mentorship Session" className="picture" />
        <p className="story">
          After joining a mentorship program, Aisha connected with a professional in her field.
          With regular support and practical advice, she gained direction and landed an internship.
          Mentorship gave her the clarity and motivation she needed to move forward.
        </p>
      </div>

      <div className="right-section">
        <h1>Mentorship Opportunities</h1>
        <ul className="mentorship-list">
          <li><a href="https://example.com/mentorship1">Women in Tech Mentorship Program</a></li>
          <li><a href="https://example.com/mentorship2">Career Guidance for Young Women</a></li>
          <li><a href="https://example.com/mentorship3">Entrepreneurship Mentorship Circle</a></li>
          <li><a href="https://example.com/mentorship4">Peer Mentorship & Support Network</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Mentorship;

