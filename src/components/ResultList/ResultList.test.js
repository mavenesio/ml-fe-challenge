import React from 'react';
import ResultList from './ResultList';


const data = [
  {
    condition: "new",
    free_shipping: true,
    id: "MLA835586176",
    picture: "http://mla-s1-p.mlstatic.com/785544-MLA32445402658_102019-I.jpg",
    price: {currency: "$", amount: 223995, decimals: 0},
    stateName: "Capital Federal",
    title: "iPhone 11 128 Gb Negro 4 Gb Ram",
  },
  {
    condition: "new",
    free_shipping: true,
    id: "MLA830184104",
    picture: "http://mla-s1-p.mlstatic.com/662389-MLA31003000984_062019-I.jpg",
    price: {currency: "$", amount: 183999.99, decimals: 0},
    stateName: "Buenos Aires",
    title: "iPhone 8 Plus 64 Gb Gris Espacial 3 Gb Ram",
  }
] 

describe('Result List', () => {
  it('should render without props', () => {   
    expect(<ResultList data={null}/>).toMatchSnapshot();
  });
  it('should render with props', () => {   
    expect(<ResultList data={data}/>).toMatchSnapshot();
  });
});