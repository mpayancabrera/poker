import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Header, PreFlopCards, Footer } from './components';
import { ContextProvider } from './config/Context';

const StyledHeader = styled(Header)`
  background-color: #ccc;
  height: 200px;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Layout>
        <StyledHeader />
        <PreFlopCards />
        <Footer />
      </Layout>
    </ContextProvider>
  );
};

export default App;
