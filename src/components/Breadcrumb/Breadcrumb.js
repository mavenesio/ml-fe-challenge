import React from 'react';
import styled from 'styled-components';


const BreadcrumbContainer = styled.div`
  font-size:14px;
  margin: 16px 0px;
  font-family: Arial, Helvetica, sans-serif;
  background-color:#EEEEEE;
`;

const Breadcrumb = ({categories}) => (
    <BreadcrumbContainer>
        {categories && <>{categories.join(" > ")}</> }
    </BreadcrumbContainer>
    );

export default Breadcrumb;