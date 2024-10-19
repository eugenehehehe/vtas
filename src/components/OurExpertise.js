import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './OurExpertise.css';
import rfid from '../image/RFID.png';
import custom from '../image/custom-appdev.png';
import erp from '../image/ERP.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <button className="slick-next custom-arrow" onClick={onClick}>
    <span>Next</span>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-prev custom-arrow" onClick={onClick}>
    <span>Prev</span>
  </button>
);

const OurExpertise = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null); 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  const cards = [
    {
      image: erp,
      title: "ERP Microsoft Dynamics 365 F&O Implementation",
      description:
        "With years of experience and a team of certified experts, Visual Tech Asia ensures a seamless implementation of Dynamics 365 F&O. Our proven methodology, tailored to your specific requirements, minimizes risks and ensures a smooth transition.",
      link: "erp",
    },
    {
      image: custom,
      title: "Custom Application Development",
      description: (
        <>
          At Visual Tech Asia, we craft bespoke <strong>mobile</strong> and <strong>web</strong> applications designed to meet your unique business needs. Our dedicated team of developers and designers leverage the latest technologies to deliver high-quality, scalable, and user-friendly applications.
        </>
      ),
      link: "custom-application-development",
    }
    ,
    {
      image: rfid,
      title: "RFID Solutions",
      description:
        "Visual Tech Asia offers cutting-edge RFID solutions that enhance efficiency and accuracy in tracking and managing your assets. Our comprehensive services ensure that you leverage the full potential of RFID technology for your business operations.",
      link: "rfid-solutions",
    },
  ];
  const getCircularIndex = (index) => (index + 1) % cards.length;
  return (
    <section className="our-expertise-section" id="expertise">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>
        <Slider {...settings} ref={sliderRef}>
          {cards.map((card, index) => {
            const isActive = getCircularIndex(activeSlide) === index;
            const isLeft = getCircularIndex(activeSlide - 1) === index;
            const isRight = getCircularIndex(activeSlide + 1) === index;


            return (
              <div
                className={`expertise-card ${isActive ? 'active' : ''} ${isLeft ? 'left' : ''} ${isRight ? 'right' : ''}`}
                key={index}
              >
                <div className="expertise-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="expertise-content">
                  <h3>{card.title}</h3>
                  <p>
                    {card.description}
                  </p>
                  <a href={card.link} className="learn-more">Learn More&nbsp;&nbsp;&gt;</a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default OurExpertise;