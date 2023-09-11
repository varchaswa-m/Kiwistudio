import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import sectionImage from '../../assets/brandidentitysvg.png';
import Imagetextsection from '../../components/servicecomponents/imagetextsection/Imagetextsection';
import Ourservice from '../../components/servicecomponents/ourservice/Ourservice';
import Ourapproach from '../../components/servicecomponents/ourapproach/Ourapproach';
import Benifits from '../../components/servicecomponents/benifits/Benifits';



const VisualIdentity = () => {
  return (
    <div>
    <HeroSection
      heading="Unleash Your Brand's Potential with Our Visual Identity Services"
      paragraph="Our team of talented designers work closely with clients to create a cohesive brand image that accurately represents their values and goals."
    />
    {/* Rest of the content for the WebDevelopment page */}
    
    <div>
      <Imagetextsection
        image={sectionImage}
        heading="What is brand identity services?"
        paragraph="Visual identity refers to the overall look and feel of a brand, including its logo, colors, typography, imagery, and other visual elements. The brand's personality, values, and message to its target audience. Visual identity design involves the strategic selection and use of visual elements to create a cohesive and memorable brand image."
      />
      {/* Rest of the content */}
    </div>

    <div>
      <Ourservice
        mainheading="Our visual identity services"
        mainpara="Our web development services are designed to provide businesses with customized solutions to meet their unique needs. We offer end-to-end web development services."
        headingone="Branding and Logo Design"
        headingtwo="Print Design"
        headingthree="Packaging Design"
        headingfour="Environmental Design"
        headingfive="Digital Design"
        headingsix="Brand Guidelines"
        paraone="We can create unique logos and branding elements for businesses to help them establish a strong visual identity."
        paratwo="We can design various print materials such as business cards, brochures, flyers, and other marketing collaterals."
        parathree="We can design packaging for products that is both visually appealing and functional, while still staying true to the brand identity."
        parafour="We can create designs for physical spaces that reflect the brand's personality and values, such as retail stores, offices, or event spaces."
        parafive=" We can design digital assets such as social media graphics, website graphics, and email marketing campaigns, ensuring they are consistent with the brand identity."
        parasix="We can provide guidelines that establish clear rules for how the brand should be presented visually, ensuring consistency across all channels and touchpoints."
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
        headingone="Discovery"
        headingtwo="Strategy"
        headingthree="Design"
        headingfour="Refinement"
        headingfive="Final Delivery"
        paragraphone="This is the first step where the design team will gather information from the client to understand their brand values, mission, target audience, and competition."
        paragraphtwo="In this step, the design team will develop a strategy for the visual identity, including the logo, color palette, typography, and overall style that aligns with the client's brand values."
        paragraphthree="Here, the actual design process begins, where the design team creates multiple design concepts based on the strategy and presents them to the client for feedback."
        paragraphfour="After the client provides feedback, the design team will refine the chosen design concept until it meets the client's expectations and brand values."
        paragraphfive=" The final step is delivering the completed visual identity assets to the client, which typically includes the logo files, color palette, typography guidelines, and any other visual identity assets required for the client's brand identity."
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

{/* Benifits section  */}

 <div>
      <Benifits
      mainheading="Benefits of visual identity"
      
      headingone="Enhances brand recognition"
      headingtwo="Encourages customer loyalty"
      headingthree="Helps to differentiate"
      headingfour="Brand consistency"
      headingfive="Increases brand awareness"
      headingsix="Builds trust and credibility"
      headingseven="Improves brand communication"
      headingeight="Facilitates marketing efforts"
      paraone="Visual identity helps to create a consistent image for your brand, which helps people to recognize and remember it easily."
      paratwo="A strong visual identity can help to create an emotional connection with customers, which can encourage loyalty and repeat business."
      parathree="By creating a unique visual identity, you can set yourself apart from competitors and make your brand more memorable to customers.."
      parafour="A consistent visual identity can help to ensure that your brand is easily recognizable across all channels, whether it be online or offline."
      parafive="A well-designed visual identity can help to increase brand awareness by making your brand more visible and memorable to customers."
      parasix="A strong visual identity can make your brand appear more professional and trustworthy, which can build credibility and attract more customers."
      paraseven="Through visual elements such as logos, colors, and typography, visual identity can communicate your brand's values and personality to customers."
      paraeight="A strong visual identity can make marketing efforts such as advertising and promotion more effective by creating a consistent message and image."
      />
      {/* Rest of the content */}
    </div>






  </div>
);
};

export default VisualIdentity;
