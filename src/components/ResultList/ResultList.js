import React, {useCallback} from 'react';
import styled from 'styled-components';
import ResultItem from '../ResultItem/ResultItem';

const ResultListContainer = styled.div`
  border-radius:8px;
  background-color:white;
`;

const ResultList = ({data}) => {
  const renderResults = useCallback( (results) => {
    return (results.map( result => {
        return (
          <ResultItem
            key={result.id}
            id={result.id}
            thumbnail={result.picture}
            currency={result.price.currency}
            price={result.price.amount}
            freeShipping={result.free_shipping}
            title={result.title}
            stateName={result.stateName}
          />
        )
        }
    ))
  }, []);

  return (
      <ResultListContainer>
        { data && renderResults(data) }
      </ResultListContainer>
  );
}

export default ResultList;
