import React from 'react';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('should render without props', () => {   
    expect(<Gallery />).toMatchSnapshot();
  });

  it('should render with props', () => {   
    expect(<Gallery pictures={[{url:'www.google.com', id:'1'},{url:'www.google.com', id:'2'}]} />).toMatchSnapshot();
  });
});