import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';

import {  withRouter } from "react-router-dom";


function SearchCard({ match, location, history }) {


  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const dispatch = useDispatch()
  var result = {
    query: ''
  }

  const formik = useFormik({
    initialValues: result,
    onSubmit: values => {
      history.push(`/search/${values.query}`);
    },
  });


  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Row className="align-items-center">
          <Col md={{ offset: 1 }} size="lg">
            <Form.Text as="h1" style={{ color: '#fff' }}> FIND YOUR MOVIE</Form.Text>
            <Form.Text as="p" />
          </Col>
        </Form.Row>
        <Form.Row className="align-items-center">
          <Col md={{ offset: 1 }} className="my-1">
            <Form.Control id="query"
              onChange={formik.handleChange}
              value={formik.values.posterurl}
              size="lg"
              placeholder="What do you want to watch?" />
          </Col>

          <Col md={4} className="my-1">
            <Button type="submit" variant="danger" size="lg">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  )
}

export default SearchCard = withRouter(SearchCard)



