
import React from 'react';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';

const App = () => {
  return (
    <>

    <HashRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
    </HashRouter>

    </>
  );
};

export default App;
