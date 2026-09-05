import React from 'react';

const PremiumBanner = () => {
  return (
    <div className="font-rajdhani text-white transition-all duration-400 mb-4 px-2">
      <div className="bg-glass backdrop-blur-md border border-white/20 rounded-2xl p-2.5 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        <h5 className="font-orbitron text-[20px] text-[var(--neon-accent)] text-glow-accent m-0 tracking-[2px]">
          ★ PREMIUM SATTA ★
        </h5>
        <a href="https://wa.me/918360750829" className="text-[var(--neon-link)] no-underline font-bold block mt-1">
          SHYAM-MATKA.COM
        </a>
      </div>
    </div>
  );
};

export default PremiumBanner;
