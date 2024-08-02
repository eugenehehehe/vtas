import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import cardImage1 from '../image/ERP.png';
import cardImage2 from '../image/custom-appdev.png';
import cardImage3 from '../image/RFID.png';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplayspeed: 2000,
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={cardImage1} alt="ERP Microsoft Dynamics 365 F&O Implementation" className="card-image" />
        <h2>ERP Microsoft Dynamics 365 F&O Implementation</h2>
        <p>With years of experience and a team of certified experts,
          Visual Tech Asia ensures a seamless implementation of
          Dynamics 365 F&O. Our proven methodology, tailored to
          your specific requirements, minimizes risks and ensures
          a smooth transition.</p>
        <button>Learn More</button>
      </div>
      <div className="slide">
        <img src={cardImage2} alt="Custom Application Development" className="card-image" />
        <h2>Custom Application Development</h2>
        <p>At Visual Tech Asia, we craft bespoke mobile and web
          applications designed to meet your unique business
          needs. Our dedicated team of developers and designers
          leverage the latest technologies to deliver high-quality,
          scalable, and user-friendly applications.</p>
        <button>Learn More</button>
      </div>
      <div className="slide">
        <img src={cardImage3} alt="RFID Solutions" className="card-image" />
        <h2>RFID Solutions</h2>
        <p>Visual Tech Asia offers cutting-edge RFID solutions that
          enhance efficiency and accuracy in tracking and
          managing your assets. Our comprehensive services
          ensure that you leverage the full potential of RFID
          technology for your business operations.</p>
          <br />
          <br />
        <button>Learn More</button>
      </div>
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default SliderComponent;
