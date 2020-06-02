import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import serchIcon from '../../assets/ic_Search.png';
import logoMl from '../../assets/Logo_ML.png';
import history from '../../services/history';

const SearchBoxContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
  height:60px;
  background-color:#FFE600;
`;
const SearchContainer = styled.label`
  position:relative;
  display:flex;
  height:100%;
  width:70%;
`;

const SearchInput = styled.input`
  align-self:center;
  height:30%;
  width:100%;
  border:unset;
  font-size:18px;
  background-color:'#EEEEE';
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
  @media (max-width: 750px) {
    font-size:14px;
  }
`;
const SearchButton = styled.img`
  cursor:pointer;
`;

const LogoImage = styled.img`
  width:60px;
  height:40px;
  align-self:center;
  cursor:pointer;
  margin-right:1rem;
  @media (max-width: 750px) {
    width:50px;
    height:30px;
  }
`;
const HiddenLabel = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const SearchHeader = () => {
  const [Search, setSearch] = useState('');
  const onSearchItems = useCallback(() => history.push(`/items?search=${Search}`), [Search]);
  return (
      <SearchBoxContainer>
        <LogoImage src={logoMl} width='60px' height='40px' alt='' onClick={() => {history.push(`/`); setSearch('')}}/>
        <SearchContainer>
          <HiddenLabel>Buscar</HiddenLabel>
          <SearchInput 
            placeholder='Nunca pares de buscar'
            value={Search}
            type='text'
            name='search'
            id='search'
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={(event) => {if (event.key === 'Enter') onSearchItems()}}
          />
          <SearchButton src={serchIcon} alt='' onClick={onSearchItems}  />
        </SearchContainer>
      </SearchBoxContainer>
  );
}

export default SearchHeader;
