import React from 'react';

const Footer = () => (
  <div className="bg-black/40 p-[20px_10px] mt-[30px] border-t-2 border-[var(--neon-main)] rounded-t-[30px] text-center font-rajdhani">
    <div className="flex justify-center gap-[15px] mb-[20px]">
      <a href="https://wa.me/918360750829" className="bg-white/10 p-[8px_15px] rounded-[10px] text-white no-underline text-[12px] border border-white/20">PRIVACY POLICY</a>
      <a href="https://wa.me/918360750829" className="bg-white/10 p-[8px_15px] rounded-[10px] text-white no-underline text-[12px] border border-white/20">DISCLAIMER</a>
    </div>

    <div className="mb-[15px]">
      {["Satta king", "Satta result", "Satta king 2019", "vip satta king", "Satta king up", "Satta live result", "Satta number", "Satta leak number"].map((link, i) => (
        <React.Fragment key={i}>
          <a href="https://wa.me/918360750829" className="text-[var(--neon-link)] no-underline text-[13px] font-semibold m-[0_5px] inline-block p-[5px] hover:underline">{link}</a>
          {i !== 7 && <span className="text-white/50">|</span>}
        </React.Fragment>
      ))}
    </div>

    <hr className="border-0 h-[1px] bg-[linear-gradient(to_right,transparent,var(--neon-main),transparent)] my-[20px]" />

    <div className="p-[15px] bg-[linear-gradient(145deg,#121212,#1e1e2f)] rounded-[15px] border border-[var(--neon-accent)] my-[20px]">
      <h4 className="text-[var(--neon-accent)] font-orbitron m-0 mb-[10px] text-[16px] tracking-[1px]">SITE DESIGN BY MR CHAUHAN DADA</h4>
    </div>

    <div className="grid grid-cols-3 gap-[10px] mt-[20px]">
      <a href="https://wa.me/918360750829" className="bg-[linear-gradient(to_bottom,var(--neon-main),var(--secondary))] p-[12px_5px] rounded-[15px] no-underline text-white text-[11px] font-bold text-center shadow-[0_4px_8px_rgba(0,0,0,0.3)]">SATTAKING</a>
      <a href="https://wa.me/918360750829" className="bg-[linear-gradient(to_bottom,var(--neon-main),var(--secondary))] p-[12px_5px] rounded-[15px] no-underline text-white text-[11px] font-bold text-center shadow-[0_4px_8px_rgba(0,0,0,0.3)]">TODAY SATTA</a>
      <a href="https://wa.me/918360750829" className="bg-[linear-gradient(to_bottom,var(--neon-main),var(--secondary))] p-[12px_5px] rounded-[15px] no-underline text-white text-[11px] font-bold text-center shadow-[0_4px_8px_rgba(0,0,0,0.3)]">SATTA RESULT</a>
    </div>
  </div>
);

export default Footer;
