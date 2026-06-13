import React from 'react';
import GameCard from './GameCard';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="var(--neon-accent)" className="w-8 h-8 animate-spin-star drop-shadow-[0_0_5px_var(--neon-accent)]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const LiveResults = () => {
  return (
    <div className="bg-black/40 rounded-[25px] p-[15px] border-t-[3px] border-[var(--neon-main)] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mx-2 mb-4 font-rajdhani">
      <div className="text-[22px] text-white uppercase flex items-center justify-center gap-[15px] mb-[20px] font-bold">
        <StarIcon />
        LIVE RESULTS
        <StarIcon />
      </div>

      <div className="text-center px-[10px] bg-black font-sans mb-4 rounded-lg py-2">
        <div className="text-[#C2185B] text-[15px] font-bold mb-[5px]">
          11 Jun 2026 05:31 AM
        </div>
        <div className="text-white text-[18px] font-medium tracking-[0.5px]">
          Today Satta Live Result !
        </div>
      </div>

      <GameCard name="DESAWAR" status="LIVE NOW" result="31" />

      <div className="bg-[linear-gradient(90deg,var(--neon-main),#121212)] p-[10px] rounded-[25px] text-center mt-[25px] border-2 border-[var(--neon-accent)] box-glow">
        <h2 className="text-[18px] m-0 text-white font-medium">📊 SATTA KING RECORD CHART</h2>
      </div>
    </div>
  );
};

export default LiveResults;
