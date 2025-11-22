import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SplineBackground from './components/SplineBackground';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: '#010101' }}>
      {!isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: '#010101' }}>
          <button
            onClick={() => setIsPlaying(true)}
            className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 px-12 py-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-6xl font-bold tracking-tight">PLAY ►</div>
            <div className="text-sm tracking-widest opacity-60 group-hover:opacity-100">
              click to begin
            </div>
          </button>
        </div>
      )}

      <div className="relative flex h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 overflow-y-auto scroll-smooth">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>

        {/* Right Spline Background */}
        <div className="hidden lg:block lg:w-1/2 fixed right-0 top-0 h-screen">
          <SplineBackground />
        </div>
      </div>
    </div>
  );
}

export default App;
