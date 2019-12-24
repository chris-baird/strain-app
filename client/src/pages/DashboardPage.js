import React, { useState } from 'react';
import { VictoryPie, VictoryContainer } from 'victory';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const DashboardPage = props => {
  return (
    <div>
      <h1 className="text-center">Welcome Chris</h1>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <p className="text-center">
            <strong>5</strong> Strains Entered
          </p>
          <VictoryPie
            animate={{
              duration: 2000
            }}
            colorScale={['#D54728', '#76BE43', '#6E335E']}
            data={[
              { x: 'Sativa', y: 4 },
              { x: 'Hybrid', y: 2 },
              { x: 'Indica', y: 10 }
            ]}
          />
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
