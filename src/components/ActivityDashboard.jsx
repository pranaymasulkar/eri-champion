import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import { TopSellersData1, TopSellersData2, TopSellersData3, TopSellersData4 } from '../Data/ActiveData.js'

const ActivityDashboard = () => {
  return (
    <>
        <section className="pb-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className="pt-4 pb-3 text-capitalize border-bottom-4">activity dashboard</h3>
                    </Col>
                    <Col xs={12}>
                        <h3 className="my-4 text-capitalize">EIR: An Overview</h3>
                        {TopSellersData1 && TopSellersData1.map((item , i) => (
                            <SingleCard
                                key={i}
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                time={item.time}
                            />
                            ))}
                    </Col>
                    <Col xs={12}>
                        <h3 className="my-4 text-capitalize">ERI process and policy overview</h3>
                        {TopSellersData2 && TopSellersData2.map((item , i) => (
                            <SingleCard
                                    key={i}
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                />
                                ))}
                    </Col>
                    <Col xs={12}>
                        <h3 className="my-4 text-capitalize">liens for CA select EIR</h3>
                        {TopSellersData3 && TopSellersData3.map((item , i) => (
                            <SingleCard
                                key={i}
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                time={item.time}
                            />
                        ))}
                    </Col>
                    <Col xs={12}>
                        <h3 className="my-4 text-capitalize">"understanding EIR" - Assessment</h3>
                        {TopSellersData4 && TopSellersData4.map((item , i) => (
                            <SingleCard
                                key={i}
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                time={item.time}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default ActivityDashboard