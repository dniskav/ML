import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchResults from './components/SearchResults/index';
import BreadCrumbs from './components/BreadCrumbs/index';
import './styles/common.scss';
import { useSelector } from 'react-redux';
import { getResults } from './redux/selectors/index';
import Router from './components/Router/'

const Content = styled.div`
  display:flex;
  margin: 0 auto;
  flex-direction: column;
  width: 994px;
`;

const Container = styled.div`
  background: #eee;
  box-sizing: border-box;
  min-height: 230px;
`;

const App: React.FC = () => {
  const res = useSelector(getResults);
  return (
    <Container>
      <Header />
      <Content>
        <BreadCrumbs />
        <Router />
        <SearchResults results={res}/>
      </Content>
    </Container>
  );
}

export default App;
