import React from 'react';

const ResultCard = ({ name, time, oldRes, newRes }) => (
  <div className="bg-[var(--card-bg)] rounded-[12px] p-[15px] text-center border border-white/10 shadow-[0_4px_6px_rgba(0,0,0,0.3)] relative overflow-hidden transition-colors duration-300">
    <div className="absolute top-0 left-0 w-[4px] h-full bg-[var(--accent)]"></div>
    <div className="text-[var(--accent)] text-[18px] font-extrabold mb-[5px] uppercase max-[480px]:text-[15px]">{name}</div>
    <span className="text-[12px] opacity-80 mb-[10px] block">{time}</span>
    <div className="flex justify-center items-center gap-[8px] mt-[10px]">
      <span className="text-[#aaa] text-[14px]">{oldRes}</span>
      <span className="text-[var(--accent)]">➔</span>
      <span className="bg-[var(--primary)] text-white px-[12px] py-[5px] rounded-[8px] text-[20px] font-bold border border-[var(--accent)] transition-colors duration-300 max-[480px]:text-[18px]">
        {newRes}
      </span>
    </div>
  </div>
);

const ResultsGrid = () => {
  const results = [
    { name: "DESAWAR", time: "(05:00 AM)", oldRes: "65", newRes: "31" },
    { name: "JAIPUR DAY", time: "(01:30 PM)", oldRes: "59", newRes: "Wait" },
    { name: "PUNJAB MAIL", time: "(02:00 PM)", oldRes: "73", newRes: "Wait" },
    { name: "SHREE SAI", time: "(02:40 PM)", oldRes: "39", newRes: "Wait" },
    { name: "DELHI BAZAR", time: "(03:10 PM)", oldRes: "93", newRes: "Wait" },
    { name: "SHREE GANESH", time: "(04:30 PM)", oldRes: "48", newRes: "Wait" },
    { name: "SIKANDRABAD", time: "(05:15 PM)", oldRes: "85", newRes: "Wait" },
    { name: "FARIDABAD", time: "(06:00 PM)", oldRes: "85", newRes: "Wait" },
    { name: "GALI DISAWAR MIX", time: "(08:15 PM)", oldRes: "99", newRes: "Wait" },
    { name: "GHAZIABAD", time: "(08:45 PM)", oldRes: "33", newRes: "Wait" },
    { name: "GALI", time: "(11:30 PM)", oldRes: "31", newRes: "Wait" },
  ];

  return (
    <div className="p-[10px] grid grid-cols-2 gap-[10px] relative z-10 mx-2">
      {results.map((r, i) => (
        <div key={i} className={i === results.length - 1 ? "col-span-2" : ""}>
          <ResultCard {...r} />
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
