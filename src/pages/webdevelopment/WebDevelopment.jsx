import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import sectionImage from '../../assets/wdsvg.png';
import Imagetextsection from '../../components/servicecomponents/imagetextsection/Imagetextsection';
import Ourservice from '../../components/servicecomponents/ourservice/Ourservice';
import Ourapproach from '../../components/servicecomponents/ourapproach/Ourapproach';
import Benifits from '../../components/servicecomponents/benifits/Benifits';



const WebDevelopment = () => {
  return (
    <div>
    <HeroSection
      heading="Expert Web Development services to elevate your online presence"
      paragraph="We specialize in crafting customized and scalable web solutions that cater to your specific needs and elevate your online presence."
    />
    {/* Rest of the content for the WebDevelopment page */}
    
    <div>
      <Imagetextsection
        image={sectionImage}
        heading="What is Web Development?"
        paragraph="Web development is a dynamic and ever-evolving field that plays a crucial role in the creation, implementation, and maintenance of websites. It encompasses a wide range of activities, including the design, development, programming, and optimization of websites to ensure they are functional, user-friendly, and visually appealing."

        
      />
      {/* Rest of the content */}
    </div>

    <div>
      <Ourservice
        mainheading="Our web development services"
        mainpara="Our web development services are designed to provide businesses with customized solutions to meet their unique needs. We offer end-to-end web development services."
        headingone="Custom web development"
        headingtwo="Web application development"
        headingthree="Mobile app development"
        headingfour="Website redesign and optimization:"
        headingfive="E-commerce development"
        headingsix="Website maintenance and support"
        paraone="Custom web development involves building a website or web application from scratch, tailored to the specific requirements of the client. It includes front-end and back-end development, database integration, and testing."
        paratwo="Web application development involves the creation of applications that run on web browsers, such as online banking applications, social media platforms, and customer relationship management systems."
        parathree="Mobile app development involves the creation of applications that run on mobile devices, such as smartphones and tablets. It includes both native and hybrid app development."
        parafour="Website redesign and optimization involves updating and improving an existing website or web application, to enhance its user experience, performance, and search engine visibility."
        parafive="E-commerce development involves the creation of an online store, with features such as shopping carts, payment gateway integration, and order management systems."
        parasix="Website maintenance and support involves ongoing monitoring, troubleshooting, and updating of a website or web application to ensure that it remains secure"
      />
      {/* Rest of the content */}
    </div>

    <div>
      <Ourapproach
        numberone="01"
        numbertwo="02"
        numberthree="03"
        numberfour="04"
        numberfive="05"
        headingone="Planning"
        headingtwo="Design"
        headingthree="Development"
        headingfour="Testing"
        headingfive="Launch"
        paragraphone=" The first step in web development is planning, which involves defining the project scope, identifying the target audience, and outlining the website's functionality and design requirements. This includes creating a sitemap, wireframes, and a project timeline."
        paragraphtwo="The design phase involves creating the visual design of the website or web application, including layout, typography, colors, and branding. This is where the website's user interface is created, and any necessary design assets are produced."
        paragraphthree="The development phase involves turning the design into a functioning website or web application. This includes front-end development, where the visual elements of the website are created using HTML, CSS, and JavaScript, and back-end development."
        paragraphfour="Testing involves ensuring that the website or web application is functioning as intended and is free of errors or bugs. This includes both manual testing and automated testing, to ensure that the website is optimized for all devices and browsers."
        paragraphfive="The final step is the launch phase, which involves deploying the website or web application to a live server, and making it accessible to the public. This involves setting up web hosting, registering the domain name, and configuring any necessary server settings. After launching, ongoing maintenance and support may be necessary to ensure the website remains up-to-date and secure."
      />
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

 <div>
      <Benifits
      mainheading="Benefits of web development"
      mainpara="Our web development services are designed to provide businesses with customized solutions to meet their unique needs. We offer end-to-end web development services."
      headingone="Increased online presence"
      headingtwo="Higher conversion rates"
      headingthree="Improved customer engagement"
      headingfour="Increased accessibility"
      headingfive="Increased sales and revenue"
      headingsix="Cost-effective marketing"
      headingseven="Competitive advantage"
      headingeight="Access to a global audience"
      paraone="Web development helps businesses create an online presence, which can lead to increased visibility and credibility."
      paratwo="By improving the user experience and search engine rankings, web development can increase the conversion rates of a website"
      parathree="Websites can be used to engage customers through interactive features such as online chat, polls, surveys, and feedback forms."
      parafour="Web development can make a website more accessible to users with disabilities, making it easier for them to access and use."
      parafive="An optimized website can help businesses increase sales and revenue by attracting more visitors and converting them into customers."
      parasix="Websites are a cost-effective marketing tool compared to traditional marketing methods such as print, radio, or television."
      paraseven=" A well-designed and functional website can give a business a competitive advantage over its rivals,helping you stay ahead of the competetion"
      paraeight="A website can be accessed from anywhere in the world, giving businesses access to a global and larger audience."
      />
      {/* Rest of the content */}
    </div>






  </div>
);
};

export default WebDevelopment;
