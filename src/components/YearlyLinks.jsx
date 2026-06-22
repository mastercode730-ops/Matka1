import React from 'react';

const ChartLink = ({ text }) => (
  <a href="https://wa.me/917589045547" className="bg-white text-black block my-[8px] p-[12px] no-underline font-bold text-[10px] rounded-[50px] border-[2px] border-[#000080] shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition duration-300 uppercase hover:bg-[#f0f0f0] hover:scale-105">
    {text}
  </a>
);

const YearlyLinks = () => {
  const games = [
    "DESAWAR", "DELHI BAZAR", "SHREE GANESH", "FARIDABAD", "GHAZIABAD", "GALI",
    "JAIPUR DAY", "PUNJAB MAIL", "SHREE SAI", "SIKANDRABAD", "GALI DISAWAR MIX"
  ];

  return (
    <div className="my-[20px] mx-[10px] text-center">
      <div className="bg-[#900C3F] text-white p-[8px] text-[15px] font-bold rounded-t-[5px] mb-[10px] uppercase">
        SATTA KING RECORD CHART 2026
      </div>
      {games.map(g => <ChartLink key={g + 2026} text={`${g} RECORD CHART 2026`} />)}

      <div className="bg-[#900C3F] text-white p-[8px] text-[15px] font-bold rounded-t-[5px] mb-[10px] mt-[30px] uppercase">
        SATTA KING RECORD CHART 2025
      </div>
      {games.map(g => <ChartLink key={g + 2025} text={`${g} RECORD CHART 2025`} />)}
    </div>
  );
};

export default YearlyLinks;
