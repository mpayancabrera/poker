import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Header, PreFlopCards } from './components';

const { Footer } = Layout;

const StyledHeader = styled(Header)`
  background-color: #ccc;
  height: 200px;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <Layout>
      <StyledHeader />
      <PreFlopCards />
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
