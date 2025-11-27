import React from 'react';
import { Newspaper } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-serif text-gray-900">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 bg-paper-texture opacity-30 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <Navigation />
        <main className="mt-6">
          <Hero />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
            <div className="md:col-span-8">
              <About />
              <Schedule />
            </div>
            <div className="md:col-span-4">
              <RegistrationForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;