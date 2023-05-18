import React from 'react';

import './scss/app.scss';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import BackgroundMobile from './components/BackgroundMobile';

function App() {
  return (
    <>
      <BackgroundMobile />
      <div className="main">
        <Background />
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
