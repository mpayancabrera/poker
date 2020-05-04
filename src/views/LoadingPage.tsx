import React from 'react';
import { Row } from 'antd';
import { Loading } from 'pccadmin-storybook';

export const LoadingPage: React.FC<{}> = () => (
  <Row type='flex' justify='center' align='middle' style={{ minHeight: '100vh' }}>
    <Loading />
  </Row>
);
