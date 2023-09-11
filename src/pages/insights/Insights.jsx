import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Insights.css';
import Menu from './Menu.js';
import HeroSection from '../../components/HeroSection/HeroSection';

const Insights = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (cateItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItems(updatedItems);
  };

  // Group items into rows of three
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div>
      <HeroSection
        heading="Insights and Ideas: Exploring the Latest Trends and Expert Knowledge"
        paragraph="Stay up-to-date with the latest insights and ideas from the world of technology, design, and innovation."
      />
      <div className='categorysection'>
        <button className='bt'onClick={() => setItems(Menu)}><span className='bts' >All</span></button>
        <button className='bt' onClick={() => filterItem('Web Development')}><span className='bts' >Web development</span></button>
        <button className='bt' onClick={() => filterItem('UI/UX Design')}><span className='bts' >UI/UX Design</span></button>
        <button className='bt' onClick={() => filterItem('Visual Identity')}><span className='bts' >Visual Identity</span></button>
        <button className='bt' onClick={() => filterItem('SEO')}><span className='bts' >SEO</span></button>
        <button className='bt' onClick={() => filterItem('App development')}><span className='bts' >App development</span></button>
        <button className='bt' onClick={() => filterItem('Animation')}><span className='bts' >Animation</span></button>
      </div>

      <div className='categorysectiondown'>
        {rows.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((elem) => {
              const { id, name, image, category, description } = elem;
              return (
                <div className='itemone' key={id}>
                  <div className='itemoneup'>
                    <img src={image} alt={name} />
                  </div>
                  <div className='itemonedown'>
                    <div className='itemonedownone'>{category}</div>
                    <div className='itemonedowntwo'>{name}</div>
                    <div className='itemonedownthree'>{description}</div>
                    <div className='itemonedownfour'>Read more</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;