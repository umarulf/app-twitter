
import React from 'react';
import './App.css';

import LeftContent from './LeftContent';
import RightContent from './RightContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     
      <div className="main-page">
        <LeftContent />
        <RightContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
