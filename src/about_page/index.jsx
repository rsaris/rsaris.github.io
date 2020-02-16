import React from 'react';

import './styles.scss';

const AboutPage = () => (
  <div className="AboutPage padded-page">
    <h1>Bob Saris</h1>
    <div className="AboutPage__contact">
      bob at bobsaris.com<br />
      <a href="https://www.linkedin.com/in/robertsaris/">LinkedIn</a><br />
      <a href="https://github.com/rsaris">Github</a>
    </div>
    <p>
      Bob is the CTO and Co-Founder of User Interviews (
      <a href="https://www.userinterviews.com/">
        www.userinterviews.com
      </a>
      ). He graduated from Carnegie Mellon University in May 2010 with a
      Bachelors in Computer Science.
    </p>
    <p>
      Outside of work he enjoys playing video games, baking bread, knitting, and
      spending time with his wife and son.
    </p>
  </div>
);

export default AboutPage;
