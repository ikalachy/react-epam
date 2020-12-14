import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class SearchCard extends React.Component {

  render() {

    return (
      <Form>
        <Form.Row className="align-items-center">
          <Col md={{ offset: 1 }} size="lg">
            <Form.Text as="h1" style={{ color: '#fff' }}> FIND YOUR MOVIE</Form.Text>
            <Form.Text as="p" />
          </Col>
        </Form.Row>
        <Form.Row className="align-items-center">
          <Col md={{ offset: 1 }} className="my-1">
            <Form.Control id="inlineFormInputWhatToWatch" size="lg" placeholder="What do you want to watch?" />
          </Col>

          <Col md={4} className="my-1">
            <Button type="submit" size="lg" variant="danger" size="lg">Submit</Button>
          </Col>
        </Form.Row>
      </Form>);
  }
}

export default SearchCard