import React from 'react';

const SocialLinks = () => {
  return (
    <div className="bg-[#ffcc00] border-2 border-[#006400] rounded-[15px] p-2.5 mx-auto my-[15px] w-[85%] text-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <span className="text-[#00008b] font-black text-[18px] mb-[1px] block">
        BULLET NEWS सुपर फास्ट खबर वाट्सअप पर देखने के लिए वाट्सअप चैनल फॉलो करे ⤵️
      </span>
      <a href="#" className="inline-flex items-center justify-center py-[1px] px-[10px] rounded-[50px] no-underline border-2 border-[#ff0000] transition-all duration-300 min-w-[180px] bg-[#0088cc] text-white mt-2">
        <i className="bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center mr-[10px] text-[14px] text-[#0088cc] font-bold">T</i>
        <span className="font-[800] text-[16px]">
          JOIN NOW CLICK HERE
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
