import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

import { useLocation, Link } from "react-router-dom";

export default function PageNotFount({ errMessage }) {

  let location = useLocation();

  return (
    <div class="text-center">
      <Alert variant="danger" onClose={() => setShow(false)} >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p /><p />
        <h2>No match for  <Badge variant="secondary">{location.pathname}</Badge></h2>

        <Link to="/">
          <h1><Badge variant="secondary">GO BACK TO HOME </Badge></h1>
        </Link>
      </Alert>
    </div>
  );
}