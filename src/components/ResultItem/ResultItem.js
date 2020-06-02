import React from 'react';
import styled from 'styled-components';
import freeShippingIcon from '../../assets/ic_shipping.png';
import history from '../../services/history';

const ResultContainer = styled.div`
  width:100%;
  align-self:center;
  border-radius:4px;
  border-bottom: 1px solid #EEEEEE;
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
  @media (max-width: 667px) {
    flex-direction:column;
    justify-content:flex-start;
  }
`;
const ResultFirstColumn = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin-right:1rem;
`;
const ResultSecondColumn = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  padding-right:16px;
  text-align:end;
  width:100%;
  & > div {
    align-self:center;
  }
  @media (max-width: 667px) {
    justify-content:flex-start;
  }
`;
const ResultPrice = styled.div`
  align-self:flex-start;
  font-size:24px;
  margin: 1rem 0rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const ResultText = styled.div`
  align-self:flex-start;
  font-size:18px;
  @media (max-width: 667px) {
    font-size:14px;
  }
  font-family: Arial, Helvetica, sans-serif;
`;

const ListImage = styled.img`
  width:180px;
  height:180px;
  @media (max-width: 667px) {
    flex-wrap: wrap;
    width:100px;
    height:100px;
  }
`;

const ResultItem = ({id, thumbnail, currency, price, freeShipping, title, stateName}) =>  {
  return (
    <ResultContainer onClick={() => history.push(`/items/${id}`)}>
      <ResultImageContainer>
        <ListImage src={thumbnail} alt=''/>
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
          <ResultText>
            {title}
          </ResultText>
        </ResultFirstColumn>
        <ResultSecondColumn>
          <ResultText>
            {stateName}
          </ResultText>
        </ResultSecondColumn>
      </ResultBody>
    </ResultContainer>
  );
}

export default ResultItem;
