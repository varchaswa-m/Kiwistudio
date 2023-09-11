import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import sectionImage from '../../assets/Animationsvg.svg';
import Imagetextsection from '../../components/servicecomponents/imagetextsection/Imagetextsection';
import Ourservice from '../../components/servicecomponents/ourservice/Ourservice';
import Ourapproach from '../../components/servicecomponents/ourapproach/Ourapproach';
import Benifits from '../../components/servicecomponents/benifits/Benifits';



const TwoDAnimation = () => {
  return (
    <div>
    <HeroSection
      heading="Bring Your Vision to Life with Our Animation Services"
      paragraph="As an animation studio, we offer a wide range of animation services to help bring your ideas to life. We deliver stunning visual effects and smooth animations that will captivate your audience."
    />
    {/* Rest of the content for the WebDevelopment page */}
    
    <div>
      <Imagetextsection
        image={sectionImage}
        heading="What is Animation?"
        paragraph="2D animation is a type of animation that involves creating a series of drawings or illustrations on two-dimensional surfaces. It is a traditional form of animation that has been used for decades to create cartoons, advertisements, and other animated content. The process of creating 2D animation involves several stages, including storyboarding, character design, layout, and animation"
      />
      {/* Rest of the content */}
    </div>

    <div>
      <Ourservice
        mainheading="Our animation services"
        mainpara="we offer a wide range of animation services to help bring your ideas to life. Our team of skilled animators can create high-quality 2D and 3D animations, motion graphics, explainer videos, character animations, and much more."
        headingone="2D animation"
        headingtwo="Motion graphics"
        headingthree="Character design"
        headingfour="Storyboarding"
        headingfive="Animated commercials"
        headingsix="Interactive animations"
        paraone="Creating 2D animated videos, explainer videos, whiteboard animations, etc."
        paratwo="Creating motion graphics, visual effects, and animated logos for videos and presentations."
        parathree="Creating characters for games, animations, and cartoons, and animating them."
        parafour="Creating storyboards and animatics to help plan out videos and animations."
        parafive="Creating animated commercials to advertise products and services."
        parasix="Creating interactive animations for websites, games, and apps."
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
        headingone="Conceptualization"
        headingtwo="Storyboarding"
        headingthree="Animation"
        headingfour="Sound design"
        headingfive="Delivery"
        paragraphone=" In this phase, the client's needs and ideas are discussed, and the concept for the animation is developed. This includes defining the target audience, creating a storyline, and finalizing the animation style."
        paragraphtwo="The storyboard is a visual representation of the animation, which includes sketches of the main scenes and characters, along with notes on the dialogue and other elements. The client approves the storyboard before moving forward."
        paragraphthree="Once the storyboard is approved, the animation process begins. This includes creating the characters, backgrounds, and props, as well as animating the scenes according to the approved storyboard."
        paragraphfour="After the animation is complete, sound effects and music are added to enhance the final product. This includes recording and editing voiceovers, selecting appropriate sound effects, and choosing music that fits the animation style."
        paragraphfive="The final animation is rendered and delivered to the client in the required format, whether it be for television, web, or social media. The animation studio may also assist in promoting the animation through digital marketing strategies."
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
      mainheading="Benefits of Animation for your brand"
      
      headingone="Captivating and engaging"
      headingtwo="Customizable"
      headingthree="Memorable"
      headingfour="Versatile"
      headingfive="Cost-effective"
      headingsix="Universal appeal"
      headingseven="Creative freedom"
      headingeight="Increased engagement"
      paraone=" Animation has the ability to captivate and engage the audience, making it an effective tool for brands to convey their message."
      paratwo=" Animation can be tailored to fit the specific needs and brand identity of a company, making it a flexible marketing tool."
      parathree="Animation has the ability to create characters and environments that stick in people's minds, making it easier for them to remember the brand."
      parafour="Animation can be used for a wide range of purposes, including explainer videos, advertisements, social media content, and more.."
      parafive="Compared to live-action video production, animation can be more cost-effective, especially for complex and high-quality visual effects."
      parasix="Animation can be understood and appreciated by people of all ages, making it a great way for brands to reach a wider audience."
      paraseven=" Animation allows brands to express their creativity and imagination, making it possible to create unique and innovative visuals."
      paraeight="Animated videos are more likely to be shared and engaged with on social media, which can increase brand exposure and reach."
      />
      {/* Rest of the content */}
    </div>






  </div>
);
};

export default TwoDAnimation;
