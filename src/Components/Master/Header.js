import { useState, useEffect } from 'react';
import { useStateContext } from '../../store/Context';

import HamburgerClosed from '../../assets/icons/hamburger-closed.svg';
import HamburgerOpen from '../../assets/icons/hamburger-open.svg';

const Header = () => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);
  const { menuOpen, setMenuOpen, planet, setPlanet, setStepIndex } = useStateContext();

  useEffect(() => {
    if (isOverflowHidden) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOverflowHidden]);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setIsOverflowHidden((prevState) => !prevState);
  };

  const handlePlanetChange = (planet) => {
    setPlanet(planet);
    handleReset();
  };

  const handleDefault = () => {
    setPlanet('mercury');
    handleReset();
  };

  const handleReset = () => {
    setStepIndex(1);

    if (menuOpen) handleMenu();
  };

  return (
    <header className="header flex relative justify-between items-center border-b border-white border-opacity-20 py-4 px-6 md:block md:pt-8 md:px-[50px] md:pb-0 lg:flex lg:items-end lg:pt-0 lg:px-8 lg:pb-5">
      <div className="header-logo md:text-center" onClick={handleDefault}>
        <h3 className="block text-antonio text-[28px] text-white tracking-[-1.05px] uppercase cursor-pointer md:inline">The Planets</h3>
      </div>
      <nav
        className={`header-nav absolute left-0 right-0 translate-x-full pt-11 px-6 pb-[65px] z-10 transition-all md:static md:mt-10 md:p-0 md:!h-full md:translate-x-0 lg:mt-0 ${
          menuOpen ? '!translate-x-0' : ''
        }`}
      >
        <ul className="header-nav-items md:flex md:justify-between">
          <li
            className={`header-nav-item mercury relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:pt-8 lg:pb-0 ${
              planet === 'mercury' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('mercury')}
          >
            Mercury
          </li>
          <li
            className={`header-nav-item venus relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'venus' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('venus')}
          >
            Venus
          </li>
          <li
            className={`header-nav-item earth relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'earth' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('earth')}
          >
            Earth
          </li>
          <li
            className={`header-nav-item mars relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'mars' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('mars')}
          >
            Mars
          </li>
          <li
            className={`header-nav-item jupiter relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'jupiter' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('jupiter')}
          >
            Jupiter
          </li>
          <li
            className={`header-nav-item saturn relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'saturn' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('saturn')}
          >
            Saturn
          </li>
          <li
            className={`header-nav-item uranus relative border-b border-white border-opacity-10 mb-5 px-[45px] pb-5 text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'uranus' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('uranus')}
          >
            Uranus
          </li>
          <li
            className={`header-nav-item neptune relative px-[45px] text-[15px] font-bold leading-[25px] tracking-[1.364px] text-white uppercase opacity-75 cursor-pointer md:border-0 md:m-0 md:px-0 md:pb-7 md:text-[11px] md:tracking-[1px] lg:ml-8 lg:pt-8 lg:pb-0 ${
              planet === 'neptune' ? '!opacity-100 active' : ''
            }`}
            onClick={() => handlePlanetChange('neptune')}
          >
            Neptune
          </li>
        </ul>
      </nav>
      <button className="hamburger md:hidden" onClick={handleMenu}>
        <img src={menuOpen ? HamburgerOpen : HamburgerClosed} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
