import React from 'react'
import { Col, Row, Button, Form, Container, Card } from 'react-bootstrap'

function Contact() {
    return (
        <div className="container-fluid bg-primary mb-3">
            <Row>
                <Col>
                    <h1 className="text-center m-4 text-light">
                        Feel free to contact me :)
                    </h1>
                </Col>
                </Row> 
                <Col sm="12" lg="8" md="8" className="container-fluid text-light">
                <Form action="https://formspree.io/f/maylplwy" method="POST">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" name="message" placeholder="Enter your message here" />
                    </Form.Group>
                    <Button variant="dark" value="Send" type="submit">
                        Submit
                    </Button>
                </Form>

                </Col>    
                
        </div>
    )
}

export default Contact
