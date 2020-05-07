import React from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const StyledCol = styled(Col)`
  background-color: #ccc;
  color: #fff;
  min-height: 100%;
`;

const Wrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const Footer: React.FC = () => {
  return (
    <Row justify='center' align='middle'>
      <StyledCol md={{ span: 24 }}>
        <Wrapper>
          <Text strong>Designed By Manuel Payán</Text>
        </Wrapper>
      </StyledCol>
    </Row>
  );
};
