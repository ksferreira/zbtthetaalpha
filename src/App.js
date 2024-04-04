import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { CssBaseline } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <ParallaxProvider> 
    
      <header>
        {/* <Header/> */}
      </header>
      <main>

        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>

      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
