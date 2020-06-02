import React from 'react';
import Gallery from './Gallery';
const pictures = [
  {
    id:"785544-MLA32445402658_102019",
    url:"http://mla-s1-p.mlstatic.com/785544-MLA32445402658_102019-O.jpg"
  },
  {
    id: "950814-MLA32445499592_102019",
    url: "http://mla-s1-p.mlstatic.com/950814-MLA32445499592_102019-O.jpg"  
  },
  {
    id: "960453-MLA32445499593_102019",
    url: "http://mla-s1-p.mlstatic.com/960453-MLA32445499593_102019-O.jpg"
  }
]

describe('Gallery', () => {
  it('should render without props', () => {   
    expect(<Gallery />).toMatchSnapshot();
  });

  it('should render with props', () => {   
    expect(<Gallery pictures={pictures} />).toMatchSnapshot();
  });
  
}); 