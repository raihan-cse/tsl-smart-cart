import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function EverydayEssentials() {
    const bbsData = [
        {
            id: 1,
            title: "Cleaning essentials ",
            imgSrc: "assets/img/browse-by-category/cleaning-essential.jpg",
            imgAlt: "Cleaning essentials",
            pLink: "/ExternalPage"
        },
        {
            id: 2,
            title: "Immunity & healthcare",
            imgSrc: "assets/img/browse-by-category/healthcare.jpg",
            imgAlt: "Immunity & healthcare",
            pLink: "/ExternalPage"
        },
        {
            id: 3,
            title: "Women's personal care",
            imgSrc: "assets/img/browse-by-category/women-personal-care.jpg",
            imgAlt: "Women's personal care",
            pLink: "/ExternalPage"
        },
        {
            id: 4,
            title: "Men's grooming",
            imgSrc: "assets/img/browse-by-category/mens-grooming.jpg",
            imgAlt: "Men's grooming",
            pLink: "/ExternalPage"
        },
    ]
    return (
        <>
            <div className="bbc-content-wrapper">
                <h3>Everyday essentials</h3>
                <div className="bbc-img-wrapper">
                    <Row>
                        {bbsData.map((data) =>
                            <Col xs={6} md={6} className="inner-box" key={data.id}>
                                <Link className="d-block text-reset" to={data.pLink}>
                                    <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
                                    <h6>{data.title}</h6>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="see-more-wrapper">
                    <Link className="sm-link" to='/ExternalPage'>See more</Link>
                </div>
            </div>
        </>
    )
}

