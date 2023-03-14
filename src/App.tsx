import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MintingPageNew from './components/MintingPage';
import OtherPage from './components/LotteryPage';
import Staking from './components/Staking';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/Staking" exact element={ <Staking/> } />
        <Route path="/Lottery" exact element={ <OtherPage/> } />
        <Route path="/Minting" exact element={ <MintingPageNew/> } />
      </Routes>
    </Router>
  )
}

export default App
