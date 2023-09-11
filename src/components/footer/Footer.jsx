import React from 'react'
import './Footer.css';
import youtubeIcon from '../../assets/youtube.svg';
import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import logoImage from '../../assets/logo.svg';
import heartsvg from '../../assets/heartsvg.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className='contents'> 
    <div className="upperdivf">
      <div className="udonef">
      <img src={logoImage} alt="Get youtube touch" />
      </div>
      <div className="udtwof">
        <text>Got ideas? we’ve got skills.</text>
      </div>
      <div className="udthreef">
        <text> Join us to accelerate your business growth</text>
      </div>
    </div>
    <div className="lowerdivf">
      <div className="lowerdivrightf">
        
          <img src={youtubeIcon} alt="Get youtube touch" />
        
        
          <img src={twitterIcon} alt="twitter" />
        
        
          <img src={instagramIcon} alt="instagram" />
        
      </div>
    
      <div className="lowerdivleftf">
        <p className='codeby'>Code by Varchaswa</p> <img src={heartsvg} alt="heartsvg" />
      </div>
    </div>
    </div>
  </div>
  )
}

export default Footer