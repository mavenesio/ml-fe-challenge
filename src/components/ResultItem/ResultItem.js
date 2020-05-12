import React from 'react';
import Styled from 'styled-components';
import freeShippingIcon from '../../assets/ic_shipping.png';
import currencyEnum from '../../constants/currency';

const ResultContainer = Styled.div`
  width:70%;
  align-self:center;
  border-radius:4px;
  border-bottom: 1px solid gray;
  background-color:white;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
`;
const ResultImageContainer = Styled.div`
  border-radius: 4px;
  padding:16px;

`;
const ResultBody = Styled.div`
  padding-bottom: 1rem;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;
const ResultPrice = Styled.div`
  align-self:flex-start;
  font-size:24px;
  margin: 1rem 0rem;
`;
const ResultTitle = Styled.div`
  align-self:flex-start;
  font-size:18px;
`;
const ResultFirstColumn = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin-right:1rem;
  width:350px;
`;
const ResultSecondColumn = Styled.div`
  margin-top: 3rem;
  padding:1rem;
  align-self:start;
`;
const ResultItem = ({id, thumbnail, currency, price, freeShipping, title, stateName}) =>  {
  return (
    <ResultContainer key={id}>
    <ResultImageContainer>
      <img src={thumbnail} width='180px' height='180px' alt=''/>
    </ResultImageContainer>
    <ResultBody>
      <ResultFirstColumn>
        <ResultPrice>
            {`${currencyEnum[currency]} ${price.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} `}
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
