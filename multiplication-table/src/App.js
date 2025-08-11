import React from 'react';
import './App.css';
import TableContainer from './components/TableContainer';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TableContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
