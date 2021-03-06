import React, {useState, useCallback, useEffect} from 'react';
import fetch from "cross-fetch";
import ResultList from '../components/ResultList/ResultList';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import {PageContainer} from '../components/Layout/PageLayout/PageLayout';

const ItemListPage = ({ match, location }) => {
  const search = location.search.replace('?search=','');
  const [Results, setResults] = useState(null);
  const [Categories, setCategories] = useState(null);

  const getItems = useCallback( async (search) => {
    const query = `${process.env.REACT_APP_API_URL}getItems?search=${search}`;
    console.log(query);
    const {items, categories} = await fetch(query).then(res => res.json());
    setResults(items);
    setCategories(categories);
  }, []);

  useEffect( () =>  { const apiCall = async () => getItems(search); apiCall() }, [getItems, search])
  
  
  return (
    <PageContainer>
        <Breadcrumb categories={Categories} />
        <ResultList data={Results} />
    </PageContainer>
  );
}

export default ItemListPage;
