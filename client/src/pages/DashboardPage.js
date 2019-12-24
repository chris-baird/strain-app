import React, { useState } from 'react';
import PieChart from 'react-minimal-pie-chart';
import { Row, Col, Card, Button, CardTitle, CardText, Badge } from 'reactstrap';

const DashboardPage = props => {
  const data = [
    { x: 'Sativa', y: 3 },
    { x: 'Hybrid', y: 2 },
    { x: 'Indica', y: 1 }
  ];
  return (
    <div>
      <h1 className="text-center">Welcome Chris</h1>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3 className="text-center">
            You Have Entered <strong>45</strong> Strains.
          </h3>
          <PieChart
            animate={true}
            data={[
              { title: 'Indica', value: 10, color: '#724373' },
              { title: 'Sativa', value: 15, color: '#B24828' },
              { title: 'Hybrid', value: 20, color: '#7CAD3D' }
            ]}
          />
          <Row className="mt-3">
            <Col>
              <Button
                className="mx-auto"
                style={{
                  backgroundColor: '#724373',
                  borderColor: '#333',
                  color: 'white',
                  curson: 'default',
                  display: 'block'
                }}
                outline
              >
                Indica <Badge color="secondary">10</Badge>
              </Button>
            </Col>
            <Col>
              <Button
                className="mx-auto"
                style={{
                  backgroundColor: '#B24828',
                  borderColor: '#333',
                  color: 'white',
                  curson: 'default',
                  display: 'block'
                }}
                outline
              >
                Sativa <Badge color="secondary">15</Badge>
              </Button>
            </Col>
            <Col>
              <Button
                className="mx-auto"
                style={{
                  backgroundColor: '#7CAD3D',
                  borderColor: '#333',
                  color: 'white',
                  curson: 'default',
                  display: 'block'
                }}
                outline
              >
                Hybrid <Badge color="secondary">20</Badge>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="6" lg="4" className="mt-3">
          <Card body outline color="danger">
            <CardTitle className="text-center font-weight-bold">
              Enter A New Strain
            </CardTitle>
            <CardText className="text-center">
              Enter information about a strain.
            </CardText>
            <Button>Click Here</Button>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" className="mt-3">
          <Card body outline color="success">
            <CardTitle className="text-center font-weight-bold">
              View All Strain Entries
            </CardTitle>
            <CardText className="text-center">
              View all strains that have been entered
            </CardText>
            <Button>Click Here</Button>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" className="mt-3">
          <Card body outline color="primary">
            <CardTitle className="text-center font-weight-bold">
              Search Strain Entries
            </CardTitle>
            <CardText className="text-center">
              Search for an existing strain entry.
            </CardText>
            <Button>Click Here</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
