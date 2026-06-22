import React from 'react';

const Navigation = () => {
  return (
    <div className="bg-bg p-[1px] transition-colors duration-300">
      <div className="grid grid-cols-4 gap-2 w-full mb-4 mt-2 px-2">
        <NavItem title="HOME" href="https://wa.me/917589045547" />
        <NavItem title="POINT LIST CHECK" href="https://wa.me/917589045547" />
        <NavItem title="REGISTER GUESSING" href="https://wa.me/917589045547" />
        <NavItem title="LOGIN" href="https://wa.me/917589045547" />
      </div>

      <div className="text-center py-2 relative">
        <h1 className="text-2xl m-0 font-black tracking-[3px] text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom, #fff 30%, var(--primary) 100%)', textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
          SATTA KING
        </h1>
        <div className="w-[60px] h-[3px] mx-auto mt-1 rounded-full transition-colors duration-300" style={{ background: 'var(--primary)' }}></div>
      </div>
    </div>
  );
};

const NavItem = ({ title, href }) => {
  return (
    <div className="rounded-xl text-center p-1 shadow-lg border border-white/10 transition-transform hover:scale-95 flex items-center justify-center min-h-[52px]"
         style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
      <a href={href} className="text-white text-[10px] font-bold uppercase font-sans tracking-[0.3px] leading-tight block w-full no-underline">
        {title}
      </a>
    </div>
  );
};

export default Navigation;
