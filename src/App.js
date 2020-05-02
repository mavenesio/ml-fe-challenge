import React, {useState} from 'react';
import Styled from 'styled-components';
// @ts-ignore
import serchIcon from './assets/ic_Search.png';
// @ts-ignore
import logoMl from './assets/Logo_ML.png';

const PageContainer = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width:100%;
  height:100vh;
  background-color:white;
`;
const SearchBoxContainer = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
  height:9vh;
  background-color:#FFE600;
`;
const SearchContainer = Styled.div`
  position:relative;
  display:flex;
  height:100%;
  width:70%;
`;

const SearchInput = Styled.input`
  background-color:#EEEEE;
  align-self:center;
  height:30%;
  width:100%;
  border:unset;
  font-size:18px;
  border-radius:4px;
  padding:0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  & ~ img{
      position:absolute;    
      top: calc(35%);
      right:10px;
      padding-left:5px;
      border-left:1px solid lightgray;
  }
  &:focus {
      outline: none;
  };
`;
const SearchButton = Styled.img`

`;

const LogoImage = Styled.img`
  width:60px;
  height:40px;
  align-self:center;
  margin-right:1rem;
`;


function App() {
  const [Search, setSearch] = useState('');
  return (
    <PageContainer>
      <SearchBoxContainer>
        <LogoImage src={logoMl} width='60px' height='40px'/>
        <SearchContainer>
          <SearchInput 
            placeholder='Nunca pares de buscar'
            value={Search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SearchButton src={serchIcon} />
        </SearchContainer>
       
      </SearchBoxContainer>
    </PageContainer>
  );
}

export default App;
