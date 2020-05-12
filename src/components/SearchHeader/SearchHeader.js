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
const SearchContainer = styled.div`
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
`;
const SearchButton = styled.img`
  cursor:pointer;
`;

const LogoImage = styled.img`
  width:60px;
  height:40px;
  align-self:center;
  margin-right:1rem;
`;

const SearchHeader = () => {
  const [Search, setSearch] = useState('');
  const onSearchItems = useCallback(() => history.push(`/items?search=${Search}`), [Search]);
  return (
      <SearchBoxContainer>
        <LogoImage src={logoMl} width='60px' height='40px'/>
        <SearchContainer>
          <SearchInput 
            placeholder='Nunca pares de buscar'
            value={Search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={(event) => {if (event.key === 'Enter') onSearchItems()}}
          />
          <SearchButton src={serchIcon} onClick={onSearchItems}  />
        </SearchContainer>
      </SearchBoxContainer>
  );
}

export default SearchHeader;
