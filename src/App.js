import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import GlobalStyle from './styles/GlobalStyle';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </AppContainer>
    </>
  );
}

export default App;
