import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Demos from './components/Demos';
import { CTA, Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-nhiquela-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Demos />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
