import React, {useState, useCallback} from 'react';
import Styled from 'styled-components';
import fetch from "cross-fetch";
import ResultList from './components/ResultList/ResultList';
import SearchHeader from './components/SearchHeader/SearchHeader';

const PageContainer = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width:100%;
  height:100vh;
  background-color:white;
`;
const SearchResultsContainer= Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:lightgray;
  padding:1rem;
`;

function App() {
  const [Search, setSearch] = useState('');
  const [Results, setResults] = useState(
    [{"id":"MLA823884855","title":"Heladera Gafa Hgf357af Blanca Con Freezer 282l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/852497-MLA32566609369_102019-I.jpg","price":26999.9,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA825165064","title":"Heladera Patrick Hpk135 Blanca Con Freezer 264l 220v","thumbnail":"http://mla-s1-p.mlstatic.com/965028-MLA32542008594_102019-I.jpg","price":25999.9,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA825379252","title":"Heladera Gafa Hgf367af Blanca Con Freezer 330l 220v","thumbnail":"http://mla-s1-p.mlstatic.com/650511-MLA32615368726_102019-I.jpg","price":31999.9,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA849974237","title":"Heladera Philco Phct260 Blanca Con Freezer 260l","thumbnail":"http://mla-s2-p.mlstatic.com/895768-MLA40315217069_012020-I.jpg","price":28999,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA844862433","title":"Heladera No Frost Whirlpool Wrm57 Inox Con Freezer 500l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/914337-MLA32557437228_102019-I.jpg","price":91999,"currency":"ARS","freeShipping":true,"stateName":"Buenos Aires"},{"id":"MLA838676407","title":"Heladera Gafa Hgf367af Platinum Con Freezer 330l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/764612-MLA32615842639_102019-I.jpg","price":35499,"currency":"ARS","freeShipping":false,"stateName":"Santa Fe"},{"id":"MLA828613661","title":"Heladera Auto Defrost Gafa Hgf377af Blanca Con Freezer 326l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/781494-MLA32557904984_102019-I.jpg","price":32999.89,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA836338304","title":"Heladera No Frost Whirlpool Wrm45a Blanca Con Freezer 375l 220v","thumbnail":"http://mla-s1-p.mlstatic.com/685958-MLA32616135951_102019-I.jpg","price":50865,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA853013831","title":"Heladera No Frost Whirlpool Wrm45a Inox Con Freezer 375l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/840366-MLA32616328774_102019-I.jpg","price":61499.9,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"},{"id":"MLA824969017","title":"Heladera No Frost Whirlpool Wre57 Inox Con Freezer 443l 220v","thumbnail":"http://mla-s2-p.mlstatic.com/780210-MLA32582052781_102019-I.jpg","price":81999,"currency":"ARS","freeShipping":false,"stateName":"Capital Federal"}]
    );
  const searchResults = useCallback( async () => {
    const query = `http://localhost:4000/api/getItems?search=${Search}`;
    await fetch(query)
      .then(res => res.json())
      .then(data => setResults(data.parsedResults));
  }, [Search]);

  
  return (
    <PageContainer>
      <SearchHeader search={Search} setSearch={setSearch} searchResults={searchResults}/>
      <SearchResultsContainer>
          <ResultList data={Results} />
      </SearchResultsContainer>
    </PageContainer>
  );
}

export default App;
