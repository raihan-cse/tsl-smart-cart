import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrowseByStore from './BrowseByStore'
import ElectronisStore from './ElectronisStore'
import EverydayEssentials from './EverydayEssentials'

export default function BrowseByCategory() {
    return (
        <>
            <section className="bbc-section bg-light-gray">
                <Container fluid>
                    <div className="bbc-section-inner">
                        <Row>
                            <Col xs={12} sm={6} md={3}>
                                <ElectronisStore />
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <BrowseByStore />
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <EverydayEssentials />
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <EverydayEssentials />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
