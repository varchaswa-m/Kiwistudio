import React, { useState } from 'react';
import './Testimonial.css';
import imagethird from '../../assets/Rachel.svg';
import image2 from '../../assets/testimonialpersontwo.svg';
import image3 from '../../assets/testimonialpersonthree.svg';

const testimonials = [
  {
    content: "I was blown away by the level of detail and thought that went into the user interface and experience designs created by this company. They took the time to truly understand our brand and goals, and delivered a beautiful and intuitive product that exceeded our expectations. Our users have also given us glowing feedback on the new design. I highly recommend this UI/UX design company for any project.",
    photo: imagethird,
    name: "John Doe",
    designation: "UX Designer",
  },
  {
    content: "Their web development skills blew me away! The level of expertise and dedication to delivering exceptional results surpassed all expectations. They understood our requirements, creating a seamless and high-performing website. The outcome was top-notch web development team for any project.Their prompt communication and professionalism throughout the project made the entire experience even more enjoyable.",
    photo: image2,
    name: "Jane Smith",
    designation: "Product Manager",
  },
  {
    content: "Their app development expertise left me in awe! The meticulous attention to detail and thoughtful approach surpassed our expectations. They took the time to fully grasp our brand and goals, delivering a stunning and intuitive app that has garnered rave reviews from our users. I wholeheartedly recommend this exceptional app development company for any project. Their app development expertise left me in awe! ",
    photo: image3,
    name: "Mark Johnson",
    designation: "Marketing Specialist",
  },
];

function TestimonialSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleBallClick = (index) => {
    if (index >= 0 && index < testimonials.length) {
      setTestimonialIndex(index);
    }
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="sectiontestimonial">
      <div className="leftt">
        <div className="left-contentt">
          <div className="headingt">What our clients say ?</div>
          <div className="paragrapht">
            From startups to established businesses, we've helped a wide range of clients achieve their goals and grow their online presence.
          </div>
        </div>
      </div>
      <div className="rightt">
        <div className="rounded-squaret">
          <p className="testimonialt">{currentTestimonial.content}</p>
          <div className="persont">
            <div className="photot"><img src={currentTestimonial.photo} alt="Person Image" /></div>
            <div className='persondetails'>
            <div className="namet">{currentTestimonial.name}</div>
            <div className="designationt">{currentTestimonial.designation}</div>
          </div>
          </div>
          <div className="ballst">
            <div className={`ball1 ${testimonialIndex === 0 ? 'active' : ''}`} onClick={() => handleBallClick(0)}></div>
            <div className={`ball2 ${testimonialIndex === 1 ? 'active' : ''}`} onClick={() => handleBallClick(1)}></div>
            <div className={`ball3 ${testimonialIndex === 2 ? 'active' : ''}`} onClick={() => handleBallClick(2)}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
