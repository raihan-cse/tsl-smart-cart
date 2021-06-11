import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StoreSelect() {
    const bssData = [
        {
            id: 1,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/shopno.png",
            imgAlt: "shopno"
        },
        {
            id: 2,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/meenaclick.png",
            imgAlt: "meenaclick"
        },
        {
            id: 3,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/unimart.png",
            imgAlt: "unimart"
        },
        {
            id: 4,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/prince-bazar.png",
            imgAlt: "prince-bazar"
        },
        {
            id: 5,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/wholesale.png",
            imgAlt: "wholesale"
        },
        {
            id: 6,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/fauender.png",
            imgAlt: "fauender"
        },
        {
            id: 7,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/tsq-wholesale.png",
            imgAlt: "tsq-wholesale"
        },
        {
            id: 8,
            pLink: "/ExternalPage",
            imgSrc: "assets/img/store/unimart.png",
            imgAlt: "unimart"
        },
    ]

    const bssSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="bss-section bg-light-gray">
                <Container fluid className="px-0">
                    <div className="sc-title-wrapper">
                        <h1 className="title-box">
                            <span className="icon"><i className="fas fa-space-shuttle"></i></span>
                            <span className="text">start your wholesale shopping</span>
                        </h1>
                    </div>
                    <div className="bss-slider-wrapper slider-wrapper">
                        <Slider {...bssSlider}>
                            {bssData.map((data) =>
                                <div className="slide-item" key={data.id}>
                                    <div className="bss-wrapper">
                                        <Link className="plink" to={data.pLink}>
                                            <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}
