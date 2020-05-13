import React from 'react';
import ItemDetails from './ItemDetails';

describe('ItemDetails', () => {
  it('should render without props', () => {   
    expect(<ItemDetails />).toMatchSnapshot();
  });

  it('should render with props', () => {
    const details = {
        id: "MLA846526085",
        title: "Apple iPhone 8 Plus 64 Gb Gris Espacial 3 Gb Ram",
        price:{
            currency: "$",
            amount: 139989.99,
            decimals: 0
        },
        picture: "http://mla-s2-p.mlstatic.com/662389-MLA31003000984_062019-I.jpg",
        condition: "new",
        free_shipping: false,
        sold_quaranty: 1,
        description: "Mayor rendimiento↵Su memoria RAM de 3 GB te permitirá ej..",
    }  
    expect(<ItemDetails details={details} />).toMatchSnapshot();
  });
});
