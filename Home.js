import React from 'react';
import './style.css'
function Home() {
  return (
    <div className="content">
      <div className="left-section">
        <h1>Welcome to Our Empowerment Platform</h1>
        <p>
          We are dedicated to supporting and uplifting young women across Kenya and beyond.
          Our platform brings together opportunities for personal and professional growth through mentorship,
          leadership training, and scholarships.
        </p>
        <p>
          We believe in the power of connection and community. By bringing together mentors, resources, and
          learning opportunities, we aim to ensure that every girl has a chance to learn, grow, and succeed.
        </p>
      </div>

      <div className="right-section">
        <h2>User Login</h2>
        <form>
          <label>Full Name:</label><br />
          <input type="text" required /><br /><br />

          <label>Email Address:</label><br />
          <input type="email" required /><br /><br />

          <label>Phone Number:</label><br />
          <input type="tel" required /><br /><br />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
