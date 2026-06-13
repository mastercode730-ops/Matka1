import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="m-[10px] p-[3px] bg-[linear-gradient(90deg,#ff0055,#ffcc00,#ff0055)] rounded-[12px] shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
      <div className="bg-[#1a1a1a] p-[15px] rounded-[10px] text-center text-white">
        <div className="text-[16px] font-bold mb-[15px] leading-[1.4] text-[#FFD700] font-rajdhani">
          <span className="text-[#ff0055] mr-1">📢</span>
          अगर आप खुद का बाजार चलाते है या चालू करना चाहते है और रिजल्ट हमारी साइट पर डलवाने के लिए हमारे टेलीग्राम चैनल को ज्वाइन करे ⤵️
        </div>
        
        <div className="flex justify-between gap-[10px]">
          <a href="#" className="flex-1 p-[12px] rounded-[8px] no-underline text-white font-bold text-[13px] flex items-center justify-center uppercase transition-transform duration-300 hover:scale-95 bg-[linear-gradient(45deg,#0088cc,#00a2ed)] shadow-[0_4px_10px_rgba(0,136,204,0.3)]">
            <span className="mr-[5px]">✈️</span> TELEGRAM
          </a>
          
          <a href="https://wa.me/917589045547" className="flex-1 p-[12px] rounded-[8px] no-underline text-white font-bold text-[13px] flex items-center justify-center uppercase transition-transform duration-300 hover:scale-95 bg-[linear-gradient(45deg,#25d366,#128c7e)] shadow-[0_4px_10px_rgba(37,211,102,0.3)]">
            <span className="mr-[5px] text-[16px]">💬</span> WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
