import React from 'react';
import './Benifits.css';

const Benifits = ({ mainheading, headingone, headingtwo, headingthree, headingfour, headingfive, headingsix, headingseven, headingeight, paraone, paratwo, parathree, parafour, parafive, parasix, paraseven, paraeight }) => {
  return (
    <div className="sectionben">
      <div className="blockben">
        <div className="divu">
          <div className="headingos">{mainheading}</div>
        </div>
        <div className="divl">
          <div className="divlroneosg">
            <div className="divlroner">
              <div className="circleben">
                <div className="numberben">01</div>
              </div>
              <div className="headingosgben">{headingone}</div>
              <div className="paragraphosg">{paraone}</div>
            </div>
            <div className="divlronel">
              <div className="circleben">
                <div className="numberben">02</div>
              </div>
              <div className="headingosgben">{headingtwo}</div>
              <div className="paragraphosg">{paratwo}</div>
            </div>
          </div>
          <div className="divlrtwoosg">
            <div className="divlrtwor">
              <div className="circleben">
                <div className="numberben">03</div>
              </div>
              <div className="headingosgben">{headingthree}</div>
              <div className="paragraphosg">{parathree}</div>
            </div>
            <div className="divlrtwol">
              <div className="circleben">
                <div className="numberben">04</div>
              </div>
              <div className="headingosgben">{headingfour}</div>
              <div className="paragraphosg">{parafour}</div>
            </div>
          </div>
          <div className="divlrthreeosg">
            <div className="divlrthreer">
              <div className="circleben">
                <div className="numberben">05</div>
              </div>
              <div className="headingosgben">{headingfive}</div>
              <div className="paragraphosg">{parafive}</div>
            </div>
            <div className="divlrthreel">
              <div className="circleben">
                <div className="numberben">06</div>
              </div>
              <div className="headingosgben">{headingsix}</div>
              <div className="paragraphosg">{parasix}</div>
            </div>
          </div>
          <div className="divlrfourosg">
            <div className="divlrfourr">
              <div className="circleben">
                <div className="numberben">07</div>
              </div>
              <div className="headingosgben">{headingseven}</div>
              <div className="paragraphosg">{paraseven}</div>
            </div>
            <div className="divlrfourl">
              <div className="circleben">
                <div className="numberben">08</div>
              </div>
              <div className="headingosgben">{headingeight}</div>
              <div className="paragraphosg">{paraeight}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
