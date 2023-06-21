import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to GK World</h1>
        <p>Expand your knowledge about the world!</p>
      </header>

      <section className="home-features">
        <div className="feature">
          <h2>Asia</h2>
          <p>Discover fascinating facts about Asia.</p>
          <a href="/Asia">Explore Asia</a>
        </div>

        <div className="feature">
          <h2>Africa</h2>
          <p>Learn about the rich culture and wildlife of Africa.</p>
          <a href="/Africa">Explore Africa</a>
        </div>

        <div className="feature">
          <h2>Europe</h2>
          <p>Explore the diverse history and landmarks of Europe.</p>
          <a href="/Europe">Explore Europe</a>
        </div>

        <div className="feature">
          <h2>Australia</h2>
          <p>Discover the unique flora and fauna of Australia.</p>
          <a href="/Aus">Explore Australia</a>
        </div>

        <div className="feature">
          <h2>Antarctica</h2>
          <p>Learn about the frozen continent of Antarctica.</p>
          <a href="/Antarctica">Explore Antarctica</a>
        </div>

        <div className="feature">
          <h2>North America</h2>
          <p>Discover the wonders of North America.</p>
          <a href="/NorthAmerica">Explore North America</a>
        </div>

        <div className="feature">
          <h2>South America</h2>
          <p>Explore the vibrant culture and landscapes of South America.</p>
          <a href="/SouthAmerica">Explore South America</a>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2023 GK World. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
