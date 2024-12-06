import React from "react";

const About = () => {
  return (
  <>
  <div className="w-full  text-white  flex items-center justify-center">
<h1 className="w-[80vw] bg-navy py-10 text-[5vw] font-bold px-5 flex items-center justify-center rounded-b-xl">
    ABOUT US
</h1>
        </div>
    <div className="text-white overflow-hidden p-10">
        
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-xl text-navy font-bold mb-5">Welcome to Ecommerce</h1>
        <p className="text-black">
          Welcome to our online store, where technology meets style. We offer a wide range of products designed to enhance your audio experience, all crafted with the latest technology and sleek designs.
        </p>
      </div>

      {/* Description Section */}
      <div className="mb-10">
        <h2 className="text-xl text-navy font-bold mb-5">Description</h2>
        <ul className="list-disc pl-5 text-black">
          <li>Explore a wide range of products designed to enhance your music, gaming, and entertainment experience.</li>
          <li>We offer high-quality headphones, wireless accessories, and noise-canceling technology.</li>
          <li>Our products provide the perfect balance of style, comfort, and cutting-edge technology.</li>
        </ul>
      </div>

      {/* Our Vision Section */}
      <div className="mb-10">
        <h2 className="text-xl text-navy font-bold mb-5">Our Vision</h2>
        <ul className="list-disc pl-5 text-black">
          <li>To deliver an unparalleled audio experience through innovative and premium products.</li>
          <li>To cater to modern audiophiles who value both functionality and design.</li>
          <li>To be a leader in the audio industry by providing high-quality, durable products that elevate lifestyles.</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-10">
        <h2 className="text-xl text-navy font-bold mb-5">Why Choose MyWebsite</h2>
        <ul className="list-disc pl-5 text-black">
          <li>High-quality products crafted with the latest technology.</li>
          <li>Excellent customer service and support, ensuring satisfaction with every purchase.</li>
          <li>Fast and secure shipping, ensuring timely delivery of your orders.</li>
          <li>Affordable pricing without compromising on quality or design.</li>
          <li>Exclusive deals and promotions to make your shopping experience even better.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
