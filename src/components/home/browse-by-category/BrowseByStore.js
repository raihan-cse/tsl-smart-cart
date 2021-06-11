import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BrowseByStore() {
    const bbsData = [
        {
            id: 1,
            title: "Cell Phones",
            imgSrc: "https://via.placeholder.com/480x360",
            imgAlt: "category product",
            pLink: "/ExternalPage"
        },
        {
            id: 2,
            title: "Computers",
            imgSrc: "https://via.placeholder.com/480x360",
            imgAlt: "category product",
            pLink: "/ExternalPage"
        },
        {
            id: 3,
            title: "Kitchen",
            imgSrc: "https://via.placeholder.com/480x360",
            imgAlt: "category product",
            pLink: "/ExternalPage"
        },
        {
            id: 4,
            title: "Personal cares",
            imgSrc: "https://via.placeholder.com/480x360",
            imgAlt: "category product",
            pLink: "/ExternalPage"
        },
    ]
    return (
        <>
            <div className="bbc-content-wrapper">
                <h3>Browse by store</h3>
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
