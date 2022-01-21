import React from 'react';
import { SearchContextProvider } from './context/SearchContext';


import { Home } from './page/Home';

function App() {
  return (  
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
}

export default App;
