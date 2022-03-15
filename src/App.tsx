import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

const Main = () => {
  console.log('안녕');
  return <div>안녕</div>;
};
