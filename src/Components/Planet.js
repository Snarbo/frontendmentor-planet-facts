import { useState, useEffect } from 'react';
import { useStateContext } from '../store/Context';

import planetData from './data.json';
import Steps from './Steps';
import sourceImage from '../assets/icons/source.svg';

const Planet = () => {
  const { planet, stepIndex } = useStateContext();
  const [isMobile, setIsMobile] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(planetData.find((planetItem) => planetItem.name === planet));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentPlanet(planetData.find((planetItem) => planetItem.name === planet));
  }, [planet]);

  return (
    <main className="planet-detail">
      {isMobile && <Steps />}
      <div className="planet pt-6 px-6 pb-[45px] md:pt-7 md:px-10 md:pb-9 2xl:pt-[70px] 2xl:px-[160px] 2xl:pb-[55px]">
        <div className="container">
          <section className="planet-image-info 2xl:flex">
            <div className="planet-image-container flex h-[256px] md:h-[422px] 2xl:w-[666px] 2xl:h-[666px]">
              <div className="relative m-auto">
                <img
                  className={`planet-image ${
                    planet === 'mercury'
                      ? 'w-[111px] h-[111px] md:w-[184px] md:h-[184px] 2xl:w-[290px] 2xl:h-[290px]'
                      : planet === 'venus'
                      ? 'w-[154px] h-[154px] md:w-[253px] md:h-[253px] 2xl:w-[400px] 2xl:h-[400px]'
                      : planet === 'earth'
                      ? 'w-[173px] h-[173px] md:w-[285px] md:h-[285px] 2xl:w-[450px] 2xl:h-[450px]'
                      : planet === 'mars'
                      ? 'w-[129px] h-[129px] md:w-[213px] md:h-[213px] 2xl:w-[336px] 2xl:h-[336px]'
                      : planet === 'jupiter'
                      ? 'w-[224px] h-[224px] md:w-[369px] md:h-[369px] 2xl:w-[582px] 2xl:h-[582px]'
                      : planet === 'saturn'
                      ? 'w-[256px] md:w-[422px] md:h-[422px] 2xl:w-[666px] 2xl:h-[666px]'
                      : planet === 'uranus'
                      ? 'w-[176px] h-[176px] md:w-[290px] md:h-[290px] 2xl:w-[458px] 2xl:h-[458px]'
                      : planet === 'neptune'
                      ? 'w-[173px] h-[173px] md:w-[285px] md:h-[285px] 2xl:w-[450px] 2xl:h-[450px]'
                      : ''
                  }`}
                  src={stepIndex === 2 ? currentPlanet.images.internal : currentPlanet.images.planet}
                  alt={currentPlanet.name}
                />
                {stepIndex === 3 && (
                  <img
                    className={`planet-geology-image absolute left-1/2 -translate-x-1/2 w-[80px] md:w-[120px] 2xl:w-[158px] ${
                      planet === 'mercury'
                        ? 'bottom-[-75px] md:bottom-[-105px] 2xl:bottom-[-130px]'
                        : planet === 'venus'
                        ? 'bottom-[-50px] md:bottom-[-70px] 2xl:bottom-[-72px]'
                        : planet === 'earth'
                        ? 'bottom-[-45px] md:bottom-[-60px] 2xl:bottom-[-50px]'
                        : planet === 'mars'
                        ? 'bottom-[-65px] md:bottom-[-90px] 2xl:bottom-[-105px]'
                        : planet === 'jupiter'
                        ? 'bottom-[-15px] 2xl:bottom-[15px]'
                        : planet === 'saturn'
                        ? 'bottom-0 md:bottom-[20px] 2xl:bottom-[65px]'
                        : planet === 'uranus'
                        ? 'bottom-[-40px] md:bottom-[-55px] 2xl:bottom-[-50px]'
                        : planet === 'neptune'
                        ? 'bottom-[-45px] md:bottom-[-55px] 2xl:bottom-[-50px]'
                        : ''
                    }`}
                    src={currentPlanet.images.geology}
                    alt="Planet Geology"
                  />
                )}
              </div>
            </div>
            <div className="planet-info mt-6 md:flex md:mt-2.5 2xl:block 2xl:mt-[75px] 2xl:ml-auto 2xl:w-[350px]">
              <div className="planet-description text-center md:flex-1 md:text-left">
                <h1 className="planet-name text-antonio text-[40px] leading-none text-white uppercase md:text-5xl 2xl:text-[80px]">{currentPlanet.name}</h1>
                <p className="planet-description mt-4 text-[11px] leading-[22px] text-white md:mt-6 2xl:text-sm 2xl:leading-[25px]">
                  {stepIndex === 1 ? currentPlanet.overview.content : stepIndex === 2 ? currentPlanet.structure.content : stepIndex === 3 ? currentPlanet.geology.content : ''}
                </p>
                <p className="planet-link flex justify-center items-center mt-8 text-[12px] leading-[25px] text-white opacity-50 md:justify-normal 2xl:mt-[50px] 2xl:text-sm 2xl:leading-[25px]">
                  Source :{' '}
                  <a
                    className="font-bold underline"
                    href={
                      stepIndex === 1
                        ? currentPlanet.overview.source
                        : stepIndex === 2
                        ? currentPlanet.structure.source
                        : stepIndex === 3
                        ? currentPlanet.geology.source
                        : currentPlanet.overview.source
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                  <img className="ml-1" src={sourceImage} alt="Source" />
                </p>
              </div>
              {!isMobile && <Steps />}
            </div>
          </section>
          <section className="planet-facts flex flex-col gap-2 mt-7 md:flex-row md:gap-2.5 2xl:gap-[40px] 2xl:mt-[18px]">
            <div className="flex justify-between items-center border border-white border-opacity-20 py-[11px] px-6 text-white md:block md:flex-1 md:p-4 md:pb-5 2xl:pt-5 2xl:px-6 2xl:px-7">
              <p className="text-[8px] font-bold leading-4 tracking-[0.7px] uppercase opacity-50 2xl:text-[11px] 2xl:leading-[25px]">Rotation Time</p>
              <h2 className="text-antonio text-2xl leading-none tracking-[-0.75px] uppercase md:mt-1.5 md:text-2xl 2xl:mt-1 2xl:text-[40px] 2xl:leading-none">{currentPlanet.rotation}</h2>
            </div>
            <div className="flex justify-between items-center border border-white border-opacity-20 py-[11px] px-6 text-white md:block md:flex-1 md:p-4 md:pb-5 2xl:pt-5 2xl:px-6 2xl:px-7">
              <p className="text-[8px] font-bold leading-4 tracking-[0.7px] uppercase opacity-50 2xl:text-[11px] 2xl:leading-[25px]">Revolution Time</p>
              <h2 className="text-antonio text-2xl leading-none tracking-[-0.75px] uppercase md:mt-1.5 md:text-2xl 2xl:mt-1 2xl:text-[40px] 2xl:leading-none">{currentPlanet.revolution}</h2>
            </div>
            <div className="flex justify-between items-center border border-white border-opacity-20 py-[11px] px-6 text-white md:block md:flex-1 md:p-4 md:pb-5 2xl:pt-5 2xl:px-6 2xl:px-7">
              <p className="text-[8px] font-bold leading-4 tracking-[0.7px] uppercase opacity-50 2xl:text-[11px] 2xl:leading-[25px]">Radius</p>
              <h2 className="text-antonio text-2xl leading-none tracking-[-0.75px] uppercase md:mt-1.5 md:text-2xl 2xl:mt-1 2xl:text-[40px] 2xl:leading-none">{currentPlanet.radius}</h2>
            </div>
            <div className="flex justify-between items-center border border-white border-opacity-20 py-[11px] px-6 text-white md:block md:flex-1 md:p-4 md:pb-5 2xl:pt-5 2xl:px-6 2xl:px-7">
              <p className="text-[8px] font-bold leading-4 tracking-[0.7px] uppercase opacity-50 2xl:text-[11px] 2xl:leading-[25px]">Average Temp.</p>
              <h2 className="text-antonio text-2xl leading-none tracking-[-0.75px] uppercase md:mt-1.5 md:text-2xl 2xl:mt-1 2xl:text-[40px] 2xl:leading-none">{currentPlanet.temperature}</h2>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Planet;
