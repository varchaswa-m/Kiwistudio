import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className='color'>
      <header>
        <Link className='Logo' to='/'><img src={Logo} alt="Logo" /></Link>

        <input type="checkbox" id='menu-bar' checked={isMenuOpen} onChange={handleMenuToggle} />
        <label htmlFor="menu-bar">Menu</label>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
            <li><Link to='/about' onClick={handleLinkClick}>About</Link></li>
            <li>
              <span className='tory'>Services</span>
              <ul>
                <li><Link to='/web-development' onClick={handleLinkClick}>Web Development</Link></li>
                <li><Link to='/app-development' onClick={handleLinkClick}>App Development</Link></li>
                <li><Link to='/ui-ux-design' onClick={handleLinkClick}>UI/UX Design</Link></li>
                <li><Link to='/2d-animation' onClick={handleLinkClick}>Animation</Link></li>
                <li><Link to='/seo-digital-marketing' onClick={handleLinkClick}>SEO</Link></li>
                <li><Link to='/visual-identity' onClick={handleLinkClick}>Visual Identity</Link></li>
              </ul>
            </li>
            <li><Link to='/insights' onClick={handleLinkClick}>Insights</Link></li>
            <li><Link to='/contact' onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
