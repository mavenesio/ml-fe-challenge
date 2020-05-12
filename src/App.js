
import React from 'react';
import styled from 'styled-components';
import history from './services/history';
import { Router, Switch, Route } from 'react-router-dom';

import ItemListPage from './pages/ItemListPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import SearchHeader from './components/SearchHeader/SearchHeader';

const PageContainer = styled.div`
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  width: 100%;
  height:100%;
  background-color:#EEEEEE;
`;

function App() {
  return (
  <PageContainer className='App'>
    <SearchHeader /> 
    <Router history={history}>
      <Switch>
          <Route path="/items?search=" exact component={ItemListPage} />
          <Route path="/items/:id" component={ItemDetailsPage} />
          <Route component={ItemListPage} />
      </Switch>
    </Router>
  </PageContainer>
  );
}

export default App;
