import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WholesaleShopping() {
    const productData = [
        {
            id: 1,
            title: "vegetables",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/tomato.png",
            imgAlt: "tomato",
            price: "10",
            priceDesc: "Tomato Round (Local)/Kg",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 2,
            title: "fruits",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/orange.png",
            imgAlt: "orange",
            price: "99",
            priceDesc: "Malta S.Africa (Sweet)/Kg",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 3,
            title: "meat",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/meet.png",
            imgAlt: "meet",
            price: "499",
            priceDesc: "Beef Premium Cube (kg)",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 4,
            title: "fish",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/fish.png",
            imgAlt: "fish",
            price: "499",
            priceDesc: "Rupchanda (8-10 PCs/Kg)",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 5,
            title: "egg/dairy",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/egg.png",
            imgAlt: "egg",
            price: "5",
            priceDesc: "Egg Loose / Piece",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 6,
            title: "frozen",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/frozen.png",
            imgAlt: "frozen",
            price: "115",
            priceDesc: "Chicken Nuggets/(300g)",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        },
        {
            id: 7,
            title: "fruits",
            vaLink: "/ExternalPage",
            imgSrc: "assets/img/product/orange.png",
            imgAlt: "orange",
            price: "99",
            priceDesc: "Malta S.Africa (Sweet)/Kg",
            storeLink: "/ExternalPage",
            pickupLink: "/ExternalPage",
            deliveryLink: "/ExternalPage",
            shipLink: "/ExternalPage"
        }
    ]

    const productSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="ws-section bg-light-gray">
                <Container fluid className="px-0">
                    <div className="sc-title-wrapper">
                        <h1 className="title-box">
                            {/* <span className="icon"><i className="fas fa-space-shuttle"></i></span> */}
                            <span className="icon"><img src={process.env.PUBLIC_URL + "assets/img/wholesal-icon.png"} alt="bss" className="img-fluid" /></span>
                            <span className="text">start your wholesale shopping</span>
                        </h1>
                    </div>
                    <div className="ws-slider-wrapper slider-wrapper">
                        <Slider {...productSlider}>
                            {productData.map((data) =>
                                <div className="slide-item" key={data.id}>
                                    <div className="prodcut-wrapper">
                                        <div className="product-inner">
                                            <div className="group-btton">
                                                <div className="title-box">
                                                    <h6 className="text">{data.title}</h6>
                                                </div>
                                                <div className="view-all-box">
                                                    <Link className="text" to={data.vaLink}>view all</Link>
                                                </div>
                                            </div>
                                            <div className="img-box">
                                                <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
                                            </div>
                                            <div className="price-box">
                                                <h4><span className="symbol">৳</span>{data.price} <span>{data.priceDesc}</span></h4>
                                            </div>
                                            <div className="adt-cart-box">
                                                <button>Sign in to Add</button>
                                            </div>
                                            <div className="status-box">
                                                <Link className="st-link" to={data.storeLink}>In-Store</Link>
                                                <Link className="st-link" to={data.pickupLink}>Pickup</Link>
                                                <Link className="st-link" to={data.deliveryLink}>Delivery</Link>
                                                <Link className="st-link disable" to={data.shipLink}>Ship</Link>
                                            </div>
                                        </div>
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
