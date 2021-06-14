import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import AboutLinks from './AboutLinks'
import HelpLinks from './HelpLinks'
import MailInfo from './MailInfo'
import PolicyLinks from './PolicyLinks'
import SocialLinks from './SocialLinks'
import OfficeAddress from './OfficeAddress'
import MobileCotrol from '../mobile-control/MobileCotrol'

export default function Footer() {
    return (
        <>
            <footer className="footer bg-light-gray">
                <Container fluid>
                    <div className="footer-wrapper">
                        <div className="footer-top">
                        <Row>
                            <Col xs={12} sm={6} md={3} lg={2}>
                                <AboutLinks />
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                                <HelpLinks />
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                                <PolicyLinks />
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                                <SocialLinks />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={2}>
                                <MailInfo />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={2}>
                                <OfficeAddress />
                            </Col>
                        </Row>
                        </div>
                        <div className="footer-bottom">
                        <Row>
                            <Col xs={12} sm={6} md={3} lg={2}>
                                <div className="footer-content-wrapper">
                                    <div className="link-wrapper">
                                    <Link to='/ExternalPage' className="link bold">
                                    <span><img src={process.env.PUBLIC_URL + "assets/img/cell-box.png"} alt="Smartcart" className="img-fluid" /></span>
                                        <span>Sell on Smartcart</span>
                                    </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                            <div className="footer-content-wrapper">
                                    <div className="link-wrapper">
                                    <Link to='/ExternalPage' className="link">
                                        <span><img src={process.env.PUBLIC_URL + "assets/img/star.png"} alt="Advertise" className="img-fluid" /></span>
                                        <span>Advertise</span>
                                    </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                            <div className="footer-content-wrapper">
                                    <div className="link-wrapper">
                                    <Link to='/ExternalPage' className="link">
                                        <span><img src={process.env.PUBLIC_URL + "assets/img/gift-box.png"} alt="Gift Cards" className="img-fluid" /></span>
                                        <span>Gift Cards</span>
                                    </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2}>
                            <div className="footer-content-wrapper">
                                    <div className="link-wrapper">
                                    <Link to='/ExternalPage' className="link">
                                        <span><img src={process.env.PUBLIC_URL + "assets/img/help.png"} alt="Help Center" className="img-fluid" /></span>
                                        <span>Help Center</span>
                                    </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={2}>
                            <div className="footer-content-wrapper">
                                    <div className="link-wrapper info-wrapper">
                                        <p className="text">&copy; 2007-{(new Date().getFullYear())} 
                                    <a href="https://smartcart.com.bd" className="link d-inline-block bold">&nbsp; smartcart.com.bd</a>
                                    </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={2}>
                                <div className="footer-content-wrapper">
                                    <div className="payment-wrapper">
                                        <img src={process.env.PUBLIC_URL + "assets/img/payment-img.png"} alt="payment" className="img-fluid" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </Container>
            </footer>
            <MobileCotrol />
        </>
    )
}
