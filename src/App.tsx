import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';

import { Home } from './page/Home';
import { Post } from './page/Post';

function App() {
  return (  
    <Router>
      <SearchContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </SearchContextProvider>
    </Router>
  );
}

export default App;