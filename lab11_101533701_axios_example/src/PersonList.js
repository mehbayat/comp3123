import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    }

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        return (
            <Container className="mt-5">
                <h1 className="text-center mb-4" style={{ color: '#0d6efd' }}>User List</h1>
                <Row>
                    {this.state.persons.map((person, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={person.picture.large}
                                    alt={`${person.name.first} ${person.name.last}`}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        {person.name.title} {person.name.first} {person.name.last}
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>Email:</strong> {person.email}<br />
                                        <strong>Phone:</strong> {person.phone}<br />
                                        <strong>Location:</strong> {person.location.city}, {person.location.country}<br />
                                        <strong>Age:</strong> {person.dob.age}<br />
                                        <strong>Gender:</strong> {person.gender}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default PersonList;
