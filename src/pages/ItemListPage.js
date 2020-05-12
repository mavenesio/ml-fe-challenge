import React, {useState, useCallback, useEffect} from 'react';
import Styled from 'styled-components';
import fetch from "cross-fetch";
import ResultList from '../components/ResultList/ResultList';

const PageContainer = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width:100%;
  height:100vh;
  background-color:white;
`;
const SearchResultsContainer= Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:lightgray;
  padding:1rem;
`;
const ItemListPage = ({ match, location }) => {
  const search = location.search.replace('?search=','');
  const [Results, setResults] = useState(null);

  const getItems = useCallback( async (search) => {
    const query = `http://localhost:4000/api/getItems?search=${search}`;
    const {items} = await fetch(query).then(res => res.json());
    setResults(items)
  }, []);

  useEffect( () =>  { const apiCall = async () => getItems(search); apiCall() }, [getItems, search])
  
  
  return (
    <PageContainer>
      <SearchResultsContainer>
          <ResultList data={Results} />
      </SearchResultsContainer>
    </PageContainer>
  );
}

export default ItemListPage;
