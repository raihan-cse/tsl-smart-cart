import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RealState() {
    const rsData = [
        {
            id: 1,
            title: 'First Classs Bricks',
            tag: 'bricks',
            price: 'tk5-tk8',
            imgSrc: 'assets/img/real-state/bricks.jpg',
            imgAlt: 'bricks',
            pLink: '/ExternalPage',
        },
        {
            id: 2,
            title: 'Rod Or Re-Bars',
            tag: '72 garder 500wt',
            price: 'tk59000 - tk69000',
            imgSrc: 'assets/img/real-state/re-bars.jpg',
            imgAlt: 'garder',
            pLink: '/ExternalPage',
        },
        {
            id: 3,
            title: 'Protland Cement',
            tag: 'cement 50kg',
            price: 'tk379-tk399',
            imgSrc: 'assets/img/real-state/cement-small.jpg',
            imgAlt: 'cement',
            pLink: '/ExternalPage',
        },
        {
            id: 4,
            title: 'Sand',
            tag: 'Sylhet local vity',
            price: 'tk-35 tk-10 tk-5',
            imgSrc: 'assets/img/real-state/sand.jpg',
            imgAlt: 'Sylhet',
            pLink: '/ExternalPage',
        },
        {
            id: 5,
            title: 'Tiles',
            tag: 'homogeneous floor tiles',
            price: 'tk39 to start/sft',
            imgSrc: 'assets/img/real-state/tiles.jpg',
            imgAlt: 'floor tiles',
            pLink: '/ExternalPage',
        },
        {
            id: 6,
            title: 'Paint',
            tag: 'burger plastic paint for indoor (18 liter)',
            price: 'tk4500-tk4900',
            imgSrc: 'assets/img/real-state/paints.jpg',
            imgAlt: 'plastic paint',
            pLink: '/ExternalPage',
        },
        {
            id: 7,
            title: 'Tinted Glass',
            tag: 'nasir glass tinted 5 mm/sft',
            price: 'tk60 to start',
            imgSrc: 'assets/img/real-state/glass.jpg',
            imgAlt: 'Tinted Glass',
            pLink: '/ExternalPage',
        },
        {
            id: 8,
            title: 'Stone Chips',
            tag: 'stone-chips 20mm down graded',
            price: 'tk149/cft start',
            imgSrc: 'assets/img/real-state/stone-chips.jpg',
            imgAlt: 'Stone Chips',
            pLink: '/ExternalPage',
        },
    ]
    return (
        <>
            <section className="rs-section bg-light-gray">
                <Container fluid>
                    <div className="sc-title-wrapper position-relative">
                        <h1 className="title-box">
                            <span className="text">construction & real state</span>
                        </h1>
                    </div>
                    <Row noGutters>
                        <Col xs={12} md={3}>
                            <div className="rs-content-wrapper">
                                <img src={process.env.PUBLIC_URL + '/assets/img/real-state/cement.png'} alt="procu" className="img-fluid" />
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            <div className="rs-content-wrapper">
                                <Row noGutters>
                                    {rsData.map((data) =>
                                        <Col xs={12} md={3} key={data.id}>
                                            <div className="rs-content-inner">
                                                <Link className="d-block text-reset" to={data.pLink}>
                                                    <div className="img-wrapper position-relative">
                                                        <img src={data.imgSrc} alt={data.imgAlt} className="img-fluid" />
                                                    </div>
                                                    <div className="text-wrapper">
                                                        <h4 className="title">{data.title}</h4>
                                                        <h5 className="tag">{data.tag}</h5>
                                                        <h5 className="price">{data.price}</h5>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
