import React, {useCallback} from 'react';
import ResultItem from '../ResultItem/ResultItem';

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
      <>
        { data && renderResults(data) }
      </>
  );
}

export default ResultList;
