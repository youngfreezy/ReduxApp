import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDaLyBywgTR9PSAKSmbTL68Pxg8ll89dE0';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector(".container"))