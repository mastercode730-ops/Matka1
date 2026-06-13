import React from 'react';

const FloatingActions = () => (
  <>
    <a href="#" className="fixed bottom-[25px] right-[20px] bg-[linear-gradient(135deg,#ffcc00,#ff8800)] text-black p-[10px_18px] rounded-[50px] font-orbitron font-bold text-[12px] no-underline flex items-center shadow-[0_4px_15px_rgba(255,204,0,0.4)] z-[9999] border border-white/20 transition-all duration-300 hover:scale-90 max-[480px]:bottom-[70px] max-[480px]:right-[15px] max-[480px]:p-[8px_15px] max-[480px]:text-[11px] group">
      <span className="mr-[8px] text-[14px] transition-transform duration-500 group-hover:rotate-[360deg]">↻</span>
      REFRESH
    </a>

    <a href="#" className="fixed bottom-[25px] left-[20px] w-[65px] h-[65px] z-[10000] cursor-pointer max-[480px]:w-[58px] max-[480px]:h-[58px] max-[480px]:bottom-[70px] max-[480px]:left-[15px]">
      <div className="w-full h-full rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,136,204,0.8)] bg-white flex items-center justify-center text-[30px] text-[#0088cc]">
        <i className="font-bold">T</i>
      </div>
    </a>

    <div className="fixed bottom-[150px] w-full pointer-events-none z-[99999] flex justify-between px-[15px]">
      <a href="#" className="pointer-events-auto w-[50px] h-[50px] rounded-full flex items-center justify-center text-center no-underline shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-[3px] border-white transition-transform duration-300 active:scale-90 bg-[radial-gradient(circle,gold,#ff9900)] text-black">
        <div className="text-[11px] font-extrabold uppercase break-words p-[5px] leading-[1.2]">Play<br/>game</div>
      </a>
    </div>
  </>
);

export default FloatingActions;
