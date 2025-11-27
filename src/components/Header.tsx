import React from 'react';

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).toUpperCase();

  return (
    <header className="border-b-2 border-black pb-3 fade-in">
      <div className="text-center my-2">
        <p className="text-sm uppercase tracking-widest">Model United Nations Conference</p>
        <h1 className="newspaper-headline">THE SIVCON TIMES</h1>
        <p className="newspaper-subheadline mt-2">SIVCON'25</p>
      </div>
      
      <div className="flex justify-between items-center text-xs mt-4">
        <div>VOL. 3</div>
        <div>{currentDate}</div>
        <div>SIBSAGAR EDITION</div>
      </div>
    </header>
  );
};

export default Header;
