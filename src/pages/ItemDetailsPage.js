import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import fetch from "cross-fetch";
import { useParams } from "react-router-dom";
import ItemDetails from '../components/ItemDetails/ItemDetails';

const ItemDetailsContainerPage = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:0rem 5rem;
  background-color: #EEEEEE;
`;



const ItemDetailsPage = () => {
    let { id } = useParams();
    const [Item, setItem] = useState(null);

    const getItemDetails = useCallback( async (itemId) => {
      const query = `http://localhost:4000/api/getItemDetails?id=${itemId}`;
      const {item} = await fetch(query).then(res => res.json());
      setItem(item);
    }, []);

    useEffect( () =>  { const apiCall = async () => getItemDetails(id); apiCall() }, [getItemDetails, id])
    
    return (
        <ItemDetailsContainerPage>
          <ItemDetails details={Item} />
        </ItemDetailsContainerPage>
    )
}

export default ItemDetailsPage;