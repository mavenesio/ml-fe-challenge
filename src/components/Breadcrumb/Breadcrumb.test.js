import React from 'react';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('should render without props', () => {   
    expect(<Breadcrumb />).toMatchSnapshot();
  });

  it('should render with props', () => {   
    expect(<Breadcrumb categories={['cat 1', 'cat 2']} />).toMatchSnapshot();
  });
});