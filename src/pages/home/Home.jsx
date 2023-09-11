import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './vison.css';
import './Whyus.css';
import './cta.css';
import SectionTSQ from './blogtwo';
import './Blog.css';
import './getintouch.css';
import './services.css';
import './testimonial.jsx';
import image from '../../assets/whyuspicture.jpg';
import visionimage from '../../assets/visionimage.svg';
import imageseventh from '../../assets/getintouch.png';
import wdlogo from '../../assets/webdevlogo.svg';
import vector from '../../assets/Vector.svg';
import visualidentityicon from '../../assets/visualidentityicon.svg';
import seoicon from '../../assets/seoicon.svg';
import animationicon from '../../assets/animationicon.svg';
import appdevelopmenticon from '../../assets/appdevelopmenticon.svg';
import uiuxdesignicon from '../../assets/uiuxdesignicon.svg';



import HeroSection from '../../components/HeroSection/HeroSection';
import TestimonialSection from './testimonial.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection
        heading="Building Ultimate End-to-End Crafting captivating digital experiences."
        paragraph="At Kiwi Slice studio we craft custom websites and apps with innovative technology and impactful design to Accelerate your Growth"
      />

      {/* vision section */}

      <div className='sectiontwoqq'>
<div className='rightside'>
<div className='rightheading'>What is our vision?</div>
<div className='rightpara'>We provide innovative and customized solutions that empower businesses to achieve their full potential in the digital landscape. We strive to uphold our core values of creativity, and excellence in all our endeavors, ensuring our clients' success is at the forefront of everything we do. </div>
</div>
<div className='leftside'><img src={visionimage} alt="Approach image" className='leftsideimage' /></div>

</div>

      {/* whyus section */}

      <div className="BG">
        <div className="blockqq">
          <div className="partion1">
            <div className="heading">
              <h2 className="heading__h2">Why choose Kiwi slice studios?</h2>
            </div>
            <div className="para">
              <p className="para__p">
                At Kiwi slice we can help clients improve their business in several ways, leading to significant benefits and measurable results. Here are a few statistics that illustrate the impact of our services:
              </p>
            </div>
          </div>
          <div className="partion2">
            <div className="image">
              <img src={image} alt="Why choose us" />
            </div>
            <div className="stats">
              <div className="stat">
                <div className="num">72%</div>
                <div className="string">increase in conversion can be seen with improved website design and user experience</div>
              </div>
              <div className="stat">
                <div className="num">69%</div>
                <div className="string">increase in conversion can be seen with improved design and user experience</div>
              </div>
              <div className="stat">
                <div className="num">80%</div>
                <div className="string">increase in conversion can be seen with improved website design and user experience</div>
              </div>
              <div className="stat">
                <div className="num">44%</div>
                <div className="string">increase in conversion can be seen with improved website design and user experience</div>
              </div>
              <div className="stat">
                <div className="num">52%</div>
                <div className="string">increase in conversion can be seen with improved design and user experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* service section  */}

<div className='servicesectionqq'>

<div className='upperdivqq'>
<div className='upperdivlineoneqq'>Services we expertise in</div>
<div className='upperdivlinetwoqq'>We can help your business grow</div>
<div className='upperdivlinethreeqq'>Our team of designers and developers work closely with each client to ensure that their website is tailored to their specific requirements.</div>
</div>





<div className='lowerdivqq'>

  <div className='rowoneqq'>
<div className='rowonerightqq'>
  <div className='squareqq'>
  <Link to="/web-development">
<div className='circleqq'><img src={wdlogo} alt="web development logo" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>Web development</h3>
<p className='building'>Building powerful websites for your digital success. Expert web development services tailored to your unique needs</p>
<div className='btn'><text className='btntext'>Read more</text> <div><img src={vector} alt="vector" className='iconasdas'/> </div>   </div>
</div>


</div>
</Link>
</div>
</div>
<div className='rowoneleftqq'>
<div className='squareqq'>
<Link to="/ui-ux-design">
<div className='circleqq'><img src={uiuxdesignicon} alt="uiux logo" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>UI/UX Design</h3>
<p className='building'>Designing beautiful, intuitive interfaces that enhance user experiences, creating beautiful, intuitive digital experiences</p>
<div className='btn'><span className='btntext'>Read more</span> <div><img src={vector} alt="vector" className='iconasdas' /> </div>   </div>
</div>


</div>
</Link>
</div>
  
    </div>
  </div>

<div className='rowtwo'>
<div className='rowonerightqq'>
  <div className='squareqq'>
  <Link to="/app-development">
<div className='circleqq'><img src={appdevelopmenticon} alt="app development logo" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>App development</h3>
<p className='building'>Building powerful websites for your digital success. Expert web development services tailored to your unique needs</p>
<div className='btn'><span className='btntext'>Read more</span> <div><img src={vector} alt="vector" className='iconasdas'/> </div>   </div>
</div>


</div>
</Link>
</div>
</div>
<div className='rowoneleftqq'>
<div className='squareqq'>
<Link to="/2d-animation">
<div className='circleqq'><img src={animationicon} alt="animation" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>2D Animation</h3>
<p className='building'>Bringing your ideas to life through captivating 2D animation, communicating your message with creativity and impact</p>
<div className='btn'><span className='btntext'>Read more</span> <div><img src={vector} alt="vector" className='iconasdas'/> </div>   </div>
</div>


</div>
</Link>
</div>
  
    </div>
</div>
  <div className='hashira'>
 
  <div className='rowonerightqq'>
  <div className='squareqq'>
  <Link to="/seo-digital-marketing">
<div className='circleqq'><img src={seoicon} alt="seo logo" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>SEO and Digital Marketing</h3>
<p className='building'>Growing your online presence and maximizing your potential. Expert services tailored to your goals.</p>
<div className='btn'><span className='btntext'>Read more</span> <div><img src={vector} alt="vector" className='iconasdas'/> </div>   </div>
</div>


</div>
</Link>
</div>
</div>
<div className='rowoneleftqq'>
<div className='squareqq'>
<Link to="/visual-identity">
<div className='circleqq'><img src={visualidentityicon} alt="web development logo" className='wdlogosvg' /></div>
<div className='sqqq'>
  <div className='squarecontents'> 
<h3 className='webdevelopment'>Visual Identity</h3>
<p className='building'>Building powerful websites for your digital success. Expert web development services tailored to your unique needs</p>
<div className='btn'><span className='btntext'>Read more</span> <div><img src={vector} alt="vector" className='iconasdas'/> </div>   </div>
</div>


</div>
</Link>
</div>
  
    </div>




    </div>
</div>










</div>

{/* cta section  */}

<div className = 'ctabackground'>
  <div className='ctacontentggg'>
      <div className = 'upar'>We provide customized solutions tailored to their specific needs and requirements</div>
      <Link className="cta-button" to="/contact" >
            <span>Get Started</span>
          </Link>
 </div>
 </div>
 {/* testimonial section  */}

<div>
  <TestimonialSection />
</div>

{/* blog section */}


<div>
      <SectionTSQ 

      />
 </div>



{/* get in touch section */}
<div className="getintouch">
  <div className='cont'>
  <div className="upperdivnod">
    <div className="heading">Get in touch</div>
    <div className="para">Got a question, project, or crazy idea? Let's talk about it over a cup of coffee</div>
  </div>
  <div className="lowerdivnod">
    <div className="leftdiv">
      <img src={imageseventh} alt="Get in touch" style={{ borderRadius: '28.4444px' }} />
    </div>
    <div className="rightdiv">
      <div className="row1abc">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </div>
      <div className="row2abc">
        <input type="text" placeholder="E-mail" />
      </div>
      <div className="row3abc">
        <textarea placeholder="Your Message"></textarea>
      </div>
      <div className="cta-button2">
        <span>Send</span>
      </div>
    </div>
  </div>
  
    
      </div>
      </div>

   </div>

   
  );
};

export default Home;