import React from 'react';
import SearchHeader from './SearchHeader';

describe('SearchHeader', () => {
  it('should render without props', () => {   
    expect(<SearchHeader />).toMatchSnapshot();
  });
});