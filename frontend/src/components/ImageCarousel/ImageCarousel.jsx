import React from "react";
import Slider from "react-slick";
import img from "../../assets/imgslide1.webp";
import img3 from "../../assets/imgslide2.webp";
import img4 from "../../assets/imgslide3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <img
          width="100%"
          height="auto"
          src={img}
          alt="image1"
          loading="eager"
          title="image1-carousel"
        />
        <img
          width="100%"
          height="auto"
          src={img3}
          alt="image2"
          loading="eager"
          title="image2-carousel"
        />
        <img
          width="100%"
          height="auto"
          src={img4}
          alt="image3"
          loading="eager"
          title="image3-carousel"
        />
      </Slider>
    </div>
  );
};

export default ImageCarousel;
