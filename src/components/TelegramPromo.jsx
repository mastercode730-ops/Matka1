import React from 'react';

const TelegramPromo = () => (
  <div className="my-[20px] mx-auto max-w-[350px] p-[10px]">
    <a href="https://wa.me/917589045547" target="_blank" rel="noreferrer" className="bg-[linear-gradient(135deg,#0088cc,#005588)] rounded-[15px] flex items-center justify-between p-[15px_20px] no-underline shadow-[0_4px_15px_rgba(0,136,204,0.4)] transition-all duration-300 border border-white/20 animate-[pulse-blue_2s_infinite] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,136,204,0.6)]">
      <div className="flex items-center gap-[15px]">
        <div className="bg-white text-[#0088cc] w-[45px] h-[45px] rounded-full flex items-center justify-center text-[24px] shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          <i className="font-bold">T</i>
        </div>
        <div className="text-white">
          <span className="block font-bold text-[18px] uppercase tracking-[1px] font-sans">
            टेलीग्राम का नंबर 1 खाईवाल ग्रुप ज्वाइन करो और बिंदास खेलो भाव 100 का 9500 ⏯️ प्ले बिंदास
          </span>
          <span className="text-[11px] opacity-90">Join for daily updates</span>
        </div>
      </div>
      <div className="bg-[#ffcc00] text-black py-[5px] px-[12px] rounded-[20px] font-bold text-[12px] uppercase">
        JOIN
      </div>
    </a>
  </div>
);

export default TelegramPromo;
