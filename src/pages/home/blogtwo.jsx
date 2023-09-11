import React, { useState } from 'react';
import './blogtwo.css';
import oneinsightsicon from '../../assets/oneinsightsicon.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import five from '../../assets/five.png';
import six from '../../assets/six.svg';
import seven from '../../assets/seven.png';
import eight from '../../assets/eight.png';
import nine from '../../assets/nine.svg';
import uxinsightsicon from '../../assets/uxinsightsicon.svg';

const SectionTSQ = () => {
  const [activeCircle, setActiveCircle] = useState(1);

  const handleCircleClick = (circleNum) => {
    setActiveCircle(circleNum);
  };

  return (
    <div className="sectiontsq">
      <div className="maindiv1b">
        <div className="oneab">
          <span>Insights</span>
        </div>
        <div className="onebb">
          <span className="onebqb">Stay up-to-date with the latest trends and technologies</span>
        </div>
      </div>

      <div className="maindivlower">
        {activeCircle === 1 && (
          <div className="twoa">
            <div className="carddiv">
              <img src={oneinsightsicon} alt="iione" />
              <span className="bh">The Importance of Responsive Web Design</span>
              <span className="readmore">Read more</span>
            </div>

            {window.innerWidth > 430 && (
              <>
                <div className="carddiv">
                  <img src={three} alt="iiithree" />
                  <span className="bh">The Future of E-commerce: Trends and Predictions</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}

            {window.innerWidth > 810 && (
              <>
                <div className="carddiv">
                  <img src={four} alt="iiofour" />
                  <span className="bh">The Importance of Visual Identity for Branding</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}
          </div>
        )}

        {activeCircle === 2 && (
          <div className="twob active">
            <div className="carddiv">
              <img src={six} alt="iisix" />
              <span className="bh">Principles of Animation bringing Life</span>
              <span className="readmore">Read more</span>
            </div>

            {window.innerWidth > 390 && (
              <>
                <div className="carddiv">
                  <img src={five} alt="iifive" />
                  <span className="bh">Integrating Social Media APIs in Mobile Apps</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}

            {window.innerWidth > 810 && (
              <>
                <div className="carddiv">
                  <img src={seven} alt="iiseven" />
                  <span className="bh">Hosting Options and Deployment Strategies</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}
          </div>
        )}

        {activeCircle === 3 && (
          <div className="twoc">
            <div className="carddiv">
              <img src={uxinsightsicon} alt="iiuxinsights" />
              <span className="bh">Why User Experience Matters in Web Design</span>
              <span className="readmore">Read more</span>
            </div>

            {window.innerWidth > 390 && (
              <>
                <div className="carddiv">
                  <img src={eight} alt="iieight" />
                  <span className="bh">The Fundamentals of User Interface Design</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}

            {window.innerWidth > 810 && (
              <>
                <div className="carddiv">
                  <img src={nine} alt="iinine" />
                  <span className="bh">SEO basics, a comprehensive guide</span>
                  <span className="readmore">Read more</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="maindiv3">
        <div className={`circle1 ${activeCircle === 1 ? 'active' : ''}`} onClick={() => handleCircleClick(1)}></div>
        <div className={`circle2 ${activeCircle === 2 ? 'active' : ''}`} onClick={() => handleCircleClick(2)}></div>
        <div className={`circle3 ${activeCircle === 3 ? 'active' : ''}`} onClick={() => handleCircleClick(3)}></div>
      </div>
    </div>
  );
};

export default SectionTSQ;
