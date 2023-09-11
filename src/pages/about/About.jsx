import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import approachimg from '../../assets/approachimg.png';
import ourphilophsy from '../../assets/ourphilophsy.png';
import founderphoto from '../../assets/founderphoto.svg';
import check from '../../assets/check.svg';
const About = () => {
  return (
    <div>
    <HeroSection
      heading="Where imagination takes flight and creative visions come to life."
      paragraph="Join us on a journey through our vibrant studio as we unlock the power of creativity and bring dreams to reality."
    />

<div className='sectiontwo'>
<div className='rightside'>
<div className='rightheading'>Our Approach</div>
<div className='rightpara'>We believe in the power of collaboration and innovation. By combining our diverse talents and expertise, we consistently push the boundaries of creativity to deliver exceptional results. We thrive on challenges and are committed to delivering projects that exceed expectations</div>
</div>
<div className='leftside'><img src={approachimg} alt="Approach image" className='leftsideimage' /></div>
</div>



<div className='background'>
<div className='sectionthree'>
<div className='rightside'>
<div className='rightheadingt'>Our Philophsy</div>
<div className='rightpara'>Creativity is at the heart of everything we do. We believe that every project deserves a distinct touch, and we approach each endeavor with fresh perspectives and boundless imagination. </div>
</div>
<div className='leftside'><img src={ourphilophsy} alt="Approach image" className='leftsideimage' /></div>
</div>
</div>


<div className='sectiontwo'>
<div className='rightside'>
<div className='rightheading'>Meet the founder</div>
<div className='rightpara'>At Kiwi Studios, we are proud to have a visionary and dedicated founder at the helm of our creative endeavors. Varchaswa, the driving force behind our studio, is an industry veteran with a deep understanding of the creative process, his artistic excellence as we bring your ideas to life with Kiwi Studios.</div>
</div>
<div className='leftside'><img src={founderphoto} alt="Approach image" className='leftsideimage' /></div>
</div>

<div className = 'ctabackground'>
  <div className='ctacontentggg'>
      <div className = 'upar'>We provide customized solutions tailored to their specific needs and requirements</div>
      <Link className="cta-button" to="/contact" >
            <span>Get Started</span>
          </Link>
 </div>
 </div>

<div className='sectionfour'>
<div className='up'>
  {/* <div id='itemone'>Our mission</div> */}
  <div id='itemtwo'>We strive for perfection.</div>
  <div id='itemthree'>At Kiwi Studios, client satisfaction is not just a goal, it's a mindset that permeates everything we do. Your satisfaction is our driving force, and we look forward to the opportunity to create something truly remarkable together.</div>
</div>
<div className='downll'>
<div className='downcontents'>

<div className='lineone'>
<div><img src={check} alt="checkicon"  className='ckeckimage'/></div> <div className='downcontentsh'>Creative Solutions for the Digital Landscape</div>
</div>

  <div className='downcontentsp'>Kiwi Studio specializes in providing creative and innovative solutions for businesses in the digital landscape.We leverage cutting-edge technologies and design principles to develop unique and visually appealing digital experiences.</div>



</div>

<div className='downcontents'>

<div className='lineone'>
<div><img src={check} alt="checkicon"  className='ckeckimage'/></div> <div className='downcontentsh'>Client-Centric Approach</div>
</div>

  <div className='downcontentsp'>At Kiwi Studio, we prioritize client satisfaction and success.We listen to our clients' needs, understand their goals, and tailor our solutions to meet their specific requirements.</div>



</div>

<div className='downcontents'>

<div className='lineone'>
<div><img src={check} alt="checkicon"  className='ckeckimage'/></div> <div className='downcontentsh'>Expertise in Multiple Domains</div>
</div>

  <div className='downcontentsp'>With a diverse team of professionals, Kiwi Studio possesses expertise in multiple domains.We offer services such as web development, mobile app development, UI/UX design, branding, and digital marketing.</div>



</div>

<div className='downcontents'>

<div className='lineone'>
<div><img src={check} alt="checkicon"  className='ckeckimage'/></div> <div className='downcontentsh'>Commitment to Quality and Excellence</div>
</div>

  <div className='downcontentsp'>Quality is at the core of everything we do at Kiwi Studio.We adhere to industry best practices and follow rigorous quality assurance processes to ensure the delivery of robust and reliable solutions.</div>



</div>



</div>
</div>










</div>
  );
};

export default About;