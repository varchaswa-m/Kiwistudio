import React from 'react';
import './Cuberto.css';

const Cuberto = () => {
  return (
    <div id="main">
      <div id="home">
        <div id="nav">
          <img className="magnet" src="https://searchvectorlogo.com/wp-content/uploads/2020/12/cuberto-logo-vector.png" alt="" />
          <div id="right">
            <a href="">our showreel</a>
            <a href="">menu</a>
            <i className="ri-menu-line magnet"></i>
          </div>
        </div>
        <div id="homemain">
          <h1>We make it happen.</h1>
          <div className="headings">
            <h1 className="hvr">Websites</h1>
            <h1 className="hvr">Apps</h1>
            <h1 className="hvr">Branding</h1>
          </div>
        </div>
        <div id="homelast">
          <p>Leading digital agency with solid design and development expertise. We build readymade websites,
            mobile applications, and elaborate online business services.</p>
        </div>
      </div>
      <div id="featured">
        <div className="fheading">
          <h1>featured</h1>
          <h1>projects</h1>
        </div>
        <div id="fimages">
          <div id="fleft">
            <div className="fleftelm">
              <h3>Riyadh</h3>
              <h1>official website of riyadh, saudi arabia's capital.</h1>
              <h4>design, development, product</h4>
            </div>
            <div className="fleftelm">
              <h3>Riyadh</h3>
              <h1>official website of riyadh, saudi arabia's capital.</h1>
              <h4>design, development, product</h4>
            </div>
            <div className="fleftelm">
              <h3>Riyadh</h3>
              <h1>official website of riyadh, saudi arabia's capital.</h1>
              <h4>design, development, product</h4>
            </div>
            <div className="fleftelm last">
              <h3>Riyadh</h3>
              <h1>official website of riyadh, saudi arabia's capital.</h1>
              <h4>design, development, product</h4>
            </div>
          </div>
          <div id="fright">
            <div className="images">
              <img src="https://images.unsplash.com/photo-1692343814412-cbe23ff32765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=767&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1609428079875-ae186c562aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1614633833026-0820552978b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="" />
            </div>
          </div>
        </div>
        <div className="btndiv">
          <button className="magnet">view all products</button>
        </div>
      </div>
      <div id="dev">
        <h1>Development and design resources</h1>
        <p>We regularly release design courses, offer advice to newbie designers, walk you through creating awesome
          effects, and share source files.</p>
      </div>
      <div id="slides">
        <div className="slide">
          <div className="img">
            <img src="https://cdn.cuberto.com/cb/upload/40bf072f506912f62412b0de381e350d.png" alt="" />
          </div>
          <div className="tag">Design Course</div>
          <h3>How To Make Epic Website // Frontend development</h3>
        </div>
        <div className="slide">
          <div className="img">
            <img src="https://cdn.cuberto.com/cb/upload/40bf072f506912f62412b0de381e350d.png" alt="" />
          </div>
          <div className="tag">Design Course</div>
          <h3>How To Make Epic Website // Frontend development</h3>
        </div>
        <div className="slide">
          <div className="img">
            <img src="https://cdn.cuberto.com/cb/upload/40bf072f506912f62412b0de381e350d.png" alt="" />
          </div>
          <div className="tag">Design Course</div>
          <h3>How To Make Epic Website // Frontend development</h3>
        </div>
      </div>
      <div className="btndiv">
        <button className="magnet">view all products</button>
      </div>
    </div>
  );
}

export default Cuberto;
