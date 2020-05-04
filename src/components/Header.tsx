import React from 'react';
import { Col, Row, Card } from 'antd';

import styled from 'styled-components';

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const Header: React.FC = () => {
  return (
    <Row type='flex' justify='center' align='middle' style={{ height: '300px' }}>
      <Col style={{ width: '100%', maxWidth: '400px' }}>
        <StyledCard>
          <Row type='flex' justify='center' style={{ margin: '20px 50px' }}>
            {/* <Logo /> */}
            <h1>Poker initial hands</h1>
          </Row>
        </StyledCard>
      </Col>
    </Row>
  );
};
