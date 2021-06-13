import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    const slideData = [
        {
            id: 1,
            imgSrc: "assets/img/hero-banner/hero-slide-1.jpg",
            imgAlt: "Slide One",
            pLink: "#link"
        },
        {
            id: 2,
            imgSrc: "assets/img/hero-banner/hero-slide-3.jpg",
            imgAlt: "Slide Two",
            pLink: "#link"
        },
        {
            id: 3,
            imgSrc: "assets/img/hero-banner/hero-slide-2.jpg",
            imgAlt: "Slide Three",
            pLink: "#link"
        }
    ]
    

    const heroSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <section className="hero-section">
                <Slider {...heroSlider}>
                    {slideData.map((data) => 
                    <div className="slide-item" key={data.id}>
                        <Link to={data.pLink}>
                            <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} /> 
                        </Link>
                    </div>
                    )}
                </Slider>
            </section>
        </>
    )
}
