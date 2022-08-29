import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import CircleCard from './CircleCard'
const HeroBanner = () => {
  return (
    <>
        <section className="herosec pt-5 pb-0 pb-md-5">
            <Container className="pt-5 pb-0 pb-md-5">
                <Row className="pt-4 pt-md-5">
                    <Col xs={12}>
                        <h1 className="text-white display-2 fw-600">Early Injury Resolution</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore ipsum rem aliquid aliquam <br/> doloribus totam, voluptate repudiandae sed tempore.</p>
                        <Nav className="herolinks py-4">
                            <Nav.Item>
                                <Nav.Link href="#">more about EIR</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#">instructions</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} className="d-block d-md-flex justify-content-center justify-content-md-start">
                        <CircleCard
                            Bgcolor="circard-one"
                            Title="eir overview"
                        />
                        <CircleCard
                            Bgcolor="circard-two"
                            Title="eir protocols and tools"
                        />
                        <CircleCard
                            Bgcolor="circard-three"
                            Title="phases of eir"
                        />
                        <CircleCard
                            Bgcolor="circard-four"
                            Title="eir negotiation and documentation"
                        />
                        <CircleCard
                            Bgcolor="circard-five"
                            Title="grand finale"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default HeroBanner