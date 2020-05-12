import React from 'react';
import styled from 'styled-components';
import freeShippingIcon from '../../assets/ic_shipping.png';
import history from '../../services/history';

const ResultContainer = styled.div`
  width:100%;
  align-self:center;
  border-radius:4px;
  border-bottom: 1px solid #EEEEEE;
  background-color:white;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  cursor: pointer;
`;
const ResultImageContainer = styled.div`
  border-radius: 4px;
  padding:16px;
`;
const ResultBody = styled.div`
  padding-bottom: 1rem;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:100%;
`;
const ResultFirstColumn = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin-right:1rem;
`;
const ResultSecondColumn = styled.div`
  margin-top: 3rem;
  padding:1rem;
  font-family: Arial, Helvetica, sans-serif;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  text-align:end;
`;
const ResultPrice = styled.div`
  align-self:flex-start;
  font-size:24px;
  margin: 1rem 0rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const ResultTitle = styled.div`
  align-self:flex-start;
  font-size:18px;
    font-family: Arial, Helvetica, sans-serif;
`;

const ResultItem = ({id, thumbnail, currency, price, freeShipping, title, stateName}) =>  {
  return (
    <ResultContainer onClick={() => history.push(`/items/${id}`)}>
      <ResultImageContainer>
        <img src={thumbnail} width='180px' height='180px' alt=''/>
      </ResultImageContainer>
      <ResultBody>
        <ResultFirstColumn>
          <ResultPrice>
            {`${currency} ${price.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} `}
            {
            freeShipping &&
            <img src={freeShippingIcon} width='20px' height='20px' alt=''/>
            }
          </ResultPrice>
          <ResultTitle>
            {title}
          </ResultTitle>
        </ResultFirstColumn>
        <ResultSecondColumn>
          {stateName}
        </ResultSecondColumn>
      </ResultBody>
    </ResultContainer>
  );
}

export default ResultItem;
