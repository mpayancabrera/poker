import React from 'react';
import { Col, Row, Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid #1890ff;
`;

export const Header: React.FC = () => {
  return (
    <Row style={{ margin: '50px' }}>
      <Col md={{ span: 10, offset: 7 }} lg={{ span: 14, offset: 5 }}>
        <StyledCard>
          <Row type='flex' justify='center' style={{ margin: '20px 40px' }}>
            <Title level={3}>RECOMENDADOR DE MANOS DE POKER</Title>
          </Row>
        </StyledCard>
      </Col>
    </Row>
  );
};
