import React from 'react';

const GuessingCard = ({ gameName, guesserName, date, followers, single, main, support, harufAndar, harufBahar }) => (
  <div className="bg-[linear-gradient(145deg,#111428,#1a1d36)] rounded-[20px] mb-[25px] border border-white/5 overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
    <div className="bg-[linear-gradient(90deg,#ffbc00,#ff8800)] px-[18px] py-[10px] text-black font-bold flex justify-between items-center text-[14px]">
      <span>🎲 {gameName}</span>
      <span>⭐ LIVE</span>
    </div>

    <div className="p-[15px] flex items-center justify-between bg-white/5 border-b border-white/5">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] rounded-full border-[2.5px] border-[#00d2ff] mr-[12px] shadow-[0_0_8px_rgba(0,210,255,0.4)] flex items-center justify-center bg-gray-700 text-white font-bold">
          {guesserName.charAt(0)}
        </div>
        <div>
          <span className="block font-bold text-[#00d2ff] text-[15px]">
            {guesserName} <span className="text-[#0095f6] ml-[5px] text-[14px] inline-block align-middle">✓</span>
          </span>
          <span className="text-[11px] color-[#8a8fa3] mt-[2px] block text-gray-400">🕒 {date}</span>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-transparent border border-[#00d2ff] text-[#00d2ff] text-[12px] font-bold py-[4px] px-[14px] rounded-[50px] transition duration-300 cursor-pointer hover:bg-[#00d2ff] hover:text-black">
          + Follow
        </button>
        <span className="text-[10px] text-[#ffbc00] block text-center mt-[2px] font-bold">
          {followers} Followers
        </span>
      </div>
    </div>

    <DataRow label="Single Jodi" values={single} type="single" />
    <DataRow label="Main Jodi" values={main} type="double" />
    <DataRow label="Support Jodi" values={support} type="triple" />
    <DataRow label="Haruf Andar" values={harufAndar} type="haruf" />
    <DataRow label="Haruf Bahar" values={harufBahar} type="haruf" />

    <div className="flex justify-around items-center py-[12px] px-[5px] bg-black/30 border-t border-white/5">
      <div className="text-[#a4a9be] text-[13px] font-semibold flex items-center gap-[6px] cursor-pointer hover:text-[#ffbc00]">
        👍 Like (0)
      </div>
      <div className="text-[#a4a9be] text-[13px] font-semibold flex items-center gap-[6px] cursor-pointer hover:text-[#ffbc00]">
        💬 Comment (0)
      </div>
      <div className="text-[#a4a9be] text-[13px] font-semibold flex items-center gap-[6px] cursor-pointer hover:text-[#ffbc00]">
        🔗 Share
      </div>
    </div>
    
    <div className="p-[8px] text-center bg-black/10">
        <a href="#" className="bg-[#24A1DE] text-white block p-[8px] rounded-[5px] font-bold text-[14px] no-underline">
            ✈️ PLAY ONLINE GAME CLICK HERE
        </a>
    </div>
  </div>
);

const DataRow = ({ label, values, type }) => {
  const getStyle = (type, val) => {
    const base = "w-[46px] h-[38px] flex items-center justify-center rounded-[8px] font-bold text-[15px] relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border ";
    if (val.isPass) return base + "border-[#2da949a6] text-white bg-[linear-gradient(135deg,#24873c,#1e7232)] shadow-[0_4px_10px_rgba(40,167,69,0.4)]";
    if (type === "single") return base + "bg-[rgba(0,255,204,0.06)] text-[#00ffcc] border-[rgba(0,255,204,0.3)]";
    if (type === "double") return base + "bg-[rgba(0,210,255,0.06)] text-[#00d2ff] border-[rgba(0,210,255,0.3)]";
    if (type === "triple") return base + "bg-[rgba(255,153,0,0.06)] text-[#ff9900] border-[rgba(255,153,0,0.3)]";
    if (type === "haruf") return base + "w-[38px] bg-[rgba(255,218,121,0.05)] text-[#ffda79] border-[rgba(255,218,121,0.25)]";
    return base;
  };

  if (!values || values.length === 0) return null;

  return (
    <div className="flex justify-between items-center py-[14px] px-[20px] border-b border-white/5">
      <span className="text-[#8a8fa3] text-[13px] font-semibold uppercase">{label}</span>
      <div className="flex flex-wrap gap-[8px] justify-end max-w-[70%]">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className={getStyle(type, v)}>
              {v.val}
              {v.isPass && (
                <span className="text-white text-[11px] absolute top-[-5px] right-[-5px] bg-[#28a745] rounded-full w-[15px] h-[15px] flex items-center justify-center">✓</span>
              )}
            </div>
            {v.isPass && <span className="text-[9px] font-bold mt-[3px] uppercase tracking-[0.5px] text-[#28a745]">pass</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const LiveGuessingPosts = () => {
  return (
    <div className="mx-2 mb-4">
      <div className="bg-[linear-gradient(135deg,#111428,#191c35)] rounded-[16px] p-[12px] mb-[20px] border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex justify-between gap-2">
        <select className="bg-[#0d0c22] border border-white/15 text-[#ffbc00] rounded-[10px] text-[13px] font-bold h-[42px] px-2 flex-1">
          <option>Name</option>
          <option>Mobile</option>
          <option>Email</option>
        </select>
        <select className="bg-[#0d0c22] border border-white/15 text-white rounded-[10px] text-[13px] h-[42px] px-2 flex-1">
          <option>Select Guesser...</option>
          <option>JUST DO IT 💫</option>
          <option>Jai Laxmi ma</option>
          <option>Rohit saini</option>
        </select>
        <button className="bg-[linear-gradient(90deg,#0099ff,#00e5ff)] text-black font-bold rounded-[10px] border-none h-[42px] px-[15px] flex items-center justify-center">
          🔍
        </button>
      </div>

      <GuessingCard
        gameName="DESAWAR"
        guesserName="JUST DO IT 💫"
        date="11 Jun 2026 - 12:00 AM"
        followers="117"
        single={[{ val: '45' }]}
        main={[{ val: '95' }, { val: '94' }]}
        support={[{ val: '99' }, { val: '40' }, { val: '90' }]}
        harufAndar={[{ val: '4' }]}
        harufBahar={[{ val: '5' }]}
      />

      <GuessingCard
        gameName="GALI"
        guesserName="Jai Laxmi ma"
        date="10 Jun 2026 - 12:00 AM"
        followers="97"
        single={[{ val: '39' }]}
        main={[{ val: '69' }, { val: '19' }]}
        support={[{ val: '22' }, { val: '57' }, { val: '32' }]}
        harufAndar={[{ val: '3', isPass: true }]}
        harufBahar={[{ val: '9' }]}
      />
      
      <div className="flex justify-between items-center mt-[25px] p-[10px_5px]">
        <button className="bg-white/5 text-[#4a4e69] border border-white/5 py-[8px] px-[18px] rounded-[12px] text-[13px] font-bold flex items-center gap-[6px] opacity-50 cursor-not-allowed">
          ❮ Prev
        </button>
        <span className="text-[#8a8fa3] text-[12px] font-semibold uppercase tracking-[0.5px]">Page 1 of 19</span>
        <button className="bg-[#111428] text-[#00d2ff] border border-[rgba(0,210,255,0.2)] py-[8px] px-[18px] rounded-[12px] text-[13px] font-bold flex items-center gap-[6px] hover:bg-[#00d2ff] hover:text-black transition duration-200">
          Next ❯
        </button>
      </div>
    </div>
  );
};

export default LiveGuessingPosts;
