import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutLinks from './AboutLinks'
import HelpLinks from './HelpLinks'
import MailInfo from './MailInfo'
import PolicyLinks from './PolicyLinks'
import SocialLinks from './SocialLinks'
import OfficeAddress from './OfficeAddress'

export default function Footer() {
    return (
        <>
            <footer>
                <Container fluid>
                    <Row>
                        <Col xs={6} md={3} lg={2}>
                            <AboutLinks />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <HelpLinks />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <PolicyLinks />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <SocialLinks />
                        </Col>
                        <Col xs={6} md={6} lg={2}>
                            <MailInfo />
                        </Col>
                        <Col xs={6} md={6} lg={2}>
                            <OfficeAddress />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
