import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import fetch from "cross-fetch";
import { useParams } from "react-router-dom";
import ItemDetails from '../components/ItemDetails/ItemDetails';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:1rem;
  margin: 0px 10%;
`;

const ItemDetailsPage = () => {
    let { id } = useParams();
    const [Item, setItem] = useState(null);
    const [Categories, setCategories] = useState(null);

    const getItemDetails = useCallback( async (itemId) => {
      const query = `${process.env.REACT_APP_API_URL}getItemDetails?id=${itemId}`;
      const {item, categories} = await fetch(query).then(res => res.json());
      setItem(item);
      setCategories(categories);
    }, []);

    useEffect( () =>  { const apiCall = async () => getItemDetails(id); apiCall() }, [getItemDetails, id])
    
    return (
        <PageContainer>
          <Breadcrumb categories={Categories} />
          <ItemDetails details={Item} />
        </PageContainer>
    )
}

export default ItemDetailsPage;