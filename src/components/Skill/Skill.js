import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {

  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    return () => {
      const texts = [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Bootstrap 5',
        'RTK',
        'Zustand',
        'TanStack',
        'Socket.io',
        'REST API',
        'Git',
        'GitHub',
        'GenAI',
        'OpenAI Integration',
        'Google Cloud',
        'AWS',
      ];

      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">S</span>
              <span data-aos="fade-down" data-aos-delay="200" data-aos-offset="200">K</span>
              <span data-aos="fade-down" data-aos-delay="400" data-aos-offset="200">I</span>
              <span data-aos="fade-down" data-aos-delay="600" data-aos-offset="200">L</span>
              <span data-aos="fade-down" data-aos-delay="800" data-aos-offset="200">L</span>
              <span data-aos="fade-down" data-aos-delay="1000" data-aos-offset="200">S</span>
            </h1>
          </div>

          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                
               
                <div className="skill__details">
                  <h4>Frontend</h4>
                  <ul>
                    <li><span>HTML5, CSS3</span></li>
                    <li><span>Bootstrap 5, Tailwind CSS</span></li>
                    <li><span>JavaScript (ES6+), TypeScript</span></li>
                    <li><span>React.js, Next.js</span></li>
                    <li><span>RTK, Zustand, TanStack</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Backend</h4>
                  <ul>
                    <li><span>Node.js</span></li>
                    <li><span>Express.js</span></li>
                    <li><span>MongoDB</span></li>
                    <li><span>Socket.io</span></li>
                    <li><span>REST API Development</span></li>
                  </ul>
                </div>

               
                <div className="skill__details">
                  <h4>Tools & Platforms</h4>
                  <ul>
                    <li><span>Git & GitHub</span></li>
                    <li><span>Google Cloud</span></li>
                    <li><span>AWS</span></li>
                  </ul>
                </div>

               
                <div className="skill__details">
                  <h4>AI & Integrations</h4>
                  <ul>
                    <li><span>GenAI</span></li>
                    <li><span>OpenAI Integration</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
