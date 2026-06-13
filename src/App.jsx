import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PremiumBanner from './components/PremiumBanner';
import LiveResults from './components/LiveResults';
import LiveGuessingPosts from './components/LiveGuessingPosts';
import ResultsGrid from './components/ResultsGrid';
import TelegramPromo from './components/TelegramPromo';
import MonthlyRecordChart from './components/MonthlyRecordChart';
import YearlyLinks from './components/YearlyLinks';
import AboutSection from './components/AboutSection';
import SocialLinks from './components/SocialLinks';
import NoticeBoard from './components/NoticeBoard';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const themes = ["default", "blue", "purple", "gold", "green"];

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(() => {
    const saved = localStorage.getItem("selectedThemeIndex");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    const activeTheme = themes[currentThemeIndex];
    if (activeTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", activeTheme);
    }
    localStorage.setItem("selectedThemeIndex", currentThemeIndex);
  }, [currentThemeIndex]);

  const nextTheme = () => {
    setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <div className="bg-appBg min-h-screen transition-colors duration-400 font-sans text-white">
      <div className="w-full bg-bg min-h-screen shadow-2xl overflow-hidden relative">
        <Header nextTheme={nextTheme} />
        <Navigation />
        
        <PremiumBanner />
        <LiveResults />
        
        <LiveGuessingPosts />
        <ResultsGrid />
        
        <TelegramPromo />
        <MonthlyRecordChart />
        <YearlyLinks />
        <AboutSection />
        
        <SocialLinks />
        <NoticeBoard />
        
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}

export default App;
