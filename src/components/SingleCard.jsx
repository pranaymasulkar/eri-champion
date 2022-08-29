import React from 'react'
import { Card, Row, Col} from 'react-bootstrap';
import { AiFillYoutube } from "react-icons/ai";

const SingleCard = ({img ,title ,subtitle, time}) => {
  return (
    <>
        <Card className="border-0 border-bottom rounded-0 bg-codgray">
            <Card.Body className="px-0 bg-light px-3">
                <Row>
                    <Col xs={12} md={2} className="border-end">
                        <Card.Img src={img} className="img-fluid w-100 mb-4 mb-md-0"/>
                    </Col>
                    <Col xs={12} md={10}>
                        <div className="d-flex justify-content-start align-items-start h-100">
                            <div className="me-2 me-md-4 ms-1 ms-md-2">
                                <AiFillYoutube className="iconsbg bg-danger rounded-circle p-2" size={10}/>
                            </div>
                            <div className="h-100">
                                <div class="d-flex align-items-start flex-column bd-highlight">
                                    <h5 class="bd-highlight text-capitalize text-primary">{title}</h5>
                                    <p class="bd-highlight text-capitalize">{subtitle}</p>
                                    <p class="bd-highlight mb-0 mt-3">{time}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  )
}

export default SingleCard