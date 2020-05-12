import React, {useState, useCallback, useEffect} from 'react';
import Styled from 'styled-components';
import fetch from "cross-fetch";
import ResultList from '../components/ResultList/ResultList';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const PageContainer = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width:100%;
  height:100%;
  background-color:#EEEEEE;
`;
const SearchResultsContainer= Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:#EEEEEE;
  padding:1rem;
  margin: 0px 10%;
`;
const ItemListPage = ({ match, location }) => {
  const search = location.search.replace('?search=','');
  const [Results, setResults] = useState(null);
  const [Categories, setCategories] = useState(null);

  const getItems = useCallback( async (search) => {
    const query = `http://localhost:4000/api/getItems?search=${search}`;
    const {items, categories} = await fetch(query).then(res => res.json());
    setResults(items);
    setCategories(categories);
  }, []);

  useEffect( () =>  { const apiCall = async () => getItems(search); apiCall() }, [getItems, search])
  
  
  return (
    <PageContainer>
      <SearchResultsContainer>
        <Breadcrumb categories={Categories} />
        <ResultList data={Results} />
      </SearchResultsContainer>
    </PageContainer>
  );
}

export default ItemListPage;
