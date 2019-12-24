import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import reactImage from '../../public/assets/images/react.png';

const LandingPage = props => {
  let history = useHistory();

  const responseGoogle = response => {
    console.log(response);
    history.push('/dashboard');
  };

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Cannabis diary app</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <GoogleLogin
            clientId="381905864233-2ubninohb4lsridk8fq5vmqlboguog26.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardImg top width="100%" src={reactImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>Easy to get started.</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                Just sign in with Google to create an account.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="12">
          <Card>
            <CardImg top width="100%" src={reactImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>Keep track</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                Easy to use interface allows you to keep track of cannabis
                strains that you have tried.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="12">
          <Card>
            <CardImg top width="100%" src={reactImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
