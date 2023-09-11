import React from 'react';
import './Ourservice.css';

const Ourservice = ({ mainheading , mainpara , headingone, headingtwo, headingthree, headingfour, headingfive, headingsix, paraone, paratwo, parathree, parafour, parafive, parasix }) => {
  return (
    <div className="section">
         <div className="block">
    <div className="divu">
        <div className="headingos">{mainheading}</div>
        <div className="paragraphors">{mainpara}</div>
      
    </div>
    <div className="divl">
      <div className="divlroneosg">
        <div className="divlroner">
          <div className="headingosg">{headingone}</div>
          <div className="paragraphosg">{paraone}</div>
        </div>
        <div className="divlronel">
          <div className="headingosg">{headingtwo}</div>
          <div className="paragraphosg">{paratwo}</div>
        </div>
      </div>
      <div className="divlrtwoosg">
        <div className="divlrtwor">
          <div className="headingosg">{headingthree}</div>
          <div className="paragraphosg">{parathree}</div>
        </div>
        <div className="divlrtwol">
          <div className="headingosg">{headingfour}</div>
          <div className="paragraphosg">{parafour}</div>
        </div>
      </div>
      <div className="divlrthreeosg">
        <div className="divlrthreer">
          <div className="headingosg">{headingfive}</div>
          <div className="paragraphosg">{parafive}</div>
        </div>
        <div className="divlrthreel">
          <div className="headingosg">{headingsix}</div>
          <div className="paragraphosg">{parasix}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default Ourservice;