import React from 'react';

const GameCard = ({ name, status, result }) => {
  return (
    <div className="bg-[linear-gradient(145deg,#1e1e2f,#2a2a40)] mb-[15px] rounded-[15px] overflow-hidden border-l-[5px] border-[var(--neon-main)] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <div className="p-2.5 bg-white/5 font-bold text-[18px] text-[var(--neon-accent)] flex justify-between">
        <span>{name}</span>
        <span className="text-[11px] text-white/50">{status}</span>
      </div>
      <div className="p-5 text-center bg-black/30 flex justify-center items-center">
        <div className="w-[75px] h-[75px] rounded-full bg-white/5 border-[3px] border-[var(--neon-main)] flex justify-center items-center font-roboto text-[42px] text-white text-glow shadow-[0_0_20px_rgba(0,212,255,0.3),inset_0_0_10px_rgba(255,255,255,0.1)]">
          {result}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
