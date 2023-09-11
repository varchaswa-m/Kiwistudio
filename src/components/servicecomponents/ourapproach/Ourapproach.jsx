import React from 'react';
import './Ourapproach.css';

const Ourapproach = ({ numberone, numbertwo, numberthree, numberfour, numberfive,headingone,headingtwo,headingthree,headingfour,headingfive, paragraphone , paragraphtwo, paragraphthree, paragraphfour, paragraphfive }) => {
  return (
    <div className="ourapproachsection">
      <h2 className="section-heading">Our approach</h2>
      <div className="content-container">
        <div className="content">
          <div className="sub-content">
            <div className="stroke"></div>
            <div className="number">{numberone}</div>
          </div>
          <div className="sub-contentchota">
          <h3 className="sub-headingoao">{headingone}</h3>
          <p className="sub-para">{paragraphone}</p>
          </div>
        </div>
        <div className="content">
          <div className="sub-content">
            <div className="stroke"></div>
            <div className="number">{numbertwo}</div>
          </div>
          <div className="sub-contentchota">
          <h3 className="sub-headingoao">{headingtwo}</h3>
          <p className="sub-para">{paragraphtwo}</p>
          </div>
        </div>
        <div className="content">
          <div className="sub-content">
            <div className="stroke"></div>
            <div className="number">{numberthree}</div>
          </div>
          <div className="sub-contentchota">
          <h3 className="sub-headingoao">{headingthree}</h3>
          <p className="sub-para">{paragraphthree}</p>
          </div>
        </div>
        <div className="content">
          <div className="sub-content">
            <div className="stroke"></div>
            <div className="number">{numberfour}</div>
          </div>
          <div className="sub-contentchota">
          <h3 className="sub-headingoao">{headingfour}</h3>
          <p className="sub-para">{paragraphfour}</p>
          </div>
        </div>
        <div className="content">
          <div className="sub-content">
            <div className="stroke"></div>
            <div className="number">{numberfive}</div>
          </div>
          <div className="sub-contentchota">
          <h3 className="sub-headingoao">{headingfive}</h3>
          <p className="sub-para">{paragraphfive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourapproach;