import React from 'react';
import ResultItem from './ResultItem';

describe('ResultItem', () => {
  it('should render without props', () => {   
    expect(<ResultItem />).toMatchSnapshot();
  });

  it('should render with props', () => {
    expect(<ResultItem id='MLA846526085' 
                       thumbnail='http://mla-s2-p.mlstatic.com/662389-MLA31003000984_062019-I.jpg'
                       currency='$'
                       price={139989.99}
                       freeShipping={true}
                       title='Apple iPhone 8 Plus 64 Gb Gris Espacial 3 Gb Ram'
                       stateName='Capital Federal'  />).toMatchSnapshot();
  });
});




