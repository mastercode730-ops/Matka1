import React from 'react';

const Header = ({ nextTheme }) => {
  return (
    <div className="flex justify-between items-center p-4 shadow-lg sticky top-0 z-50 transition-colors duration-300" 
         style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))' }}>
      <div className="font-bold text-lg tracking-wide text-white">SHYAM MATKA</div>
      <button 
        className="bg-accent text-black font-bold py-2 px-4 rounded-full text-xs shadow hover:scale-95 transition-transform"
        onClick={nextTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Header;
