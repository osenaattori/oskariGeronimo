import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Video from './pages/Video';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default App;
