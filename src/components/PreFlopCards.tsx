import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import styled, { css } from 'styled-components';
import { BoardConfig } from './BoardConfig';
import { BoardHand } from './BoardHand';
import { Context } from '../config/Context';

const Wrapper = styled.div<{ showConfig?: boolean }>`
  display: flex;
  justify-content: center;

  ${props =>
    props.showConfig &&
    css`
      flex-direction: row;
      justify-content: space-around;
    `}
`;

export const PreFlopCards: React.FC = () => {
  const { openConfig } = useContext(Context);

  return (
    <Row justify='center' style={{ margin: '50px' }}>
      <Col span={24}>
        <Wrapper showConfig={openConfig}>
          {openConfig ? (
            <Row style={{ width: '100%' }}>
              <Col span={12}>
                <Row>
                  <Col span={20} offset={2}>
                    <BoardConfig />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={20} offset={2}>
                    <BoardHand />
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <Row style={{ width: '100%' }}>
              <Col md={{ span: 24 }}>
                <BoardHand />
              </Col>
            </Row>
          )}
        </Wrapper>
      </Col>
    </Row>
  );
};
