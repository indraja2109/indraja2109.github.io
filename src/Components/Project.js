import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'


function Project() {
    return (
        <div>
            
            <Container id="project">
                <Row>
                    <Col>
                        <h1 className="m-5 text-center ">My Projects</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="mt-2 mb-2">
                            <Card.Img variant="top" src="/ToDoApp.PNG" />
                            <Card.Body>
                                <Card.Title>To Do App</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button 
                                onClick={()=>{
                                    window.open("https://indraja-todoapp.netlify.app/","_blank")
                                }}
                                variant="primary">Live Demo</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mt-2 mb-2">
                            <Card.Img variant="top" src="/ToDoApp.PNG" />
                            <Card.Body>
                                <Card.Title>To Do App</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button 
                                onClick={()=>{
                                    window.open("https://indraja-todoapp.netlify.app/","_blank")
                                }}
                                variant="primary">Live Demo</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mt-2 mb-2">
                            <Card.Img variant="top" src="/ToDoApp.PNG" />
                            <Card.Body>
                                <Card.Title>To Do App</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button 
                                onClick={()=>{
                                    window.open("https://indraja-todoapp.netlify.app/","_blank")
                                }}
                                variant="primary">Live Demo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Project
