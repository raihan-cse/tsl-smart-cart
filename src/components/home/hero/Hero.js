import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    const slideData = [
        {
            id: 1,
            imgSrc: "https://via.placeholder.com/1920x350",
            imgAlt: "Slide One",
            pLink: "/ExternalPage"
        },
        {
            id: 2,
            imgSrc: "https://via.placeholder.com/1920x350",
            imgAlt: "Slide Two",
            pLink: "/ExternalPage"
        },
        {
            id: 3,
            imgSrc: "https://via.placeholder.com/1920x350",
            imgAlt: "Slide Three",
            pLink: "/ExternalPage"
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
                            <img src={data.imgSrc} alt={data.imgAlt} /> 
                        </Link>
                    </div>
                    )}
                </Slider>
            </section>
        </>
    )
}
