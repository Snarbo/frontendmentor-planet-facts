import { useState, useEffect } from 'react';
import { useStateContext } from '../store/Context';

const Steps = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { stepIndex, setStepIndex } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.step-item').forEach((step) => {
      step.classList.remove('active');
    });
    document.getElementById('step-' + stepIndex).classList.add('active');
  }, [stepIndex]);

  return (
    <div className="steps flex justify-between border-b border-white border-opacity-20 pt-4 px-6 md:p-0 md:block md:border-0 md:mt-[42px] md:ml-[70px] md:p-0 md:w-[280px] 2xl:w-full 2xl:mt-10 2xl:ml-0">
      <button
        id="step-1"
        className={`step-item relative pb-4 h-fit text-[9px] font-bold tracking-[2px] text-white text-left uppercase opacity-50 transition md:border md:border-white md:border-opacity-20 md:py-2 md:px-5 md:w-full md:leading-6 md:opacity-100 md:hover:bg-white md:hover:bg-opacity-20 2xl:py-3 2xl:px-7 2xl:text-xs 2xl:leading-[25px]`}
        onClick={() => setStepIndex(1)}
      >
        {!isMobile && <span className="mr-3.5 opacity-50">01</span>}Overview
      </button>
      <button
        id="step-2"
        className="step-item relative pb-4 h-fit text-[9px] font-bold tracking-[2px] text-white text-left uppercase opacity-50 transition md:border md:border-white md:border-opacity-20 md:mt-4 md:py-2 md:px-5 md:w-full md:leading-6 md:opacity-100 md:hover:bg-white md:hover:bg-opacity-20 2xl:py-3 2xl:px-7 2xl:text-xs 2xl:leading-[25px]"
        onClick={() => setStepIndex(2)}
      >
        {!isMobile && <span className="mr-3.5 opacity-50">02</span>}
        {isMobile ? 'Structure' : 'Internal Structure'}
      </button>
      <button
        id="step-3"
        className="step-item relative pb-4 h-fit text-[9px] font-bold tracking-[2px] text-white text-left uppercase opacity-50 transition md:border md:border-white md:border-opacity-20 md:mt-4 md:py-2 md:px-5 md:w-full md:leading-6 md:opacity-100 md:hover:bg-white md:hover:bg-opacity-20 2xl:py-3 2xl:px-7 2xl:text-xs 2xl:leading-[25px]"
        onClick={() => setStepIndex(3)}
      >
        {!isMobile && <span className="mr-3.5 opacity-50">03</span>}
        {isMobile ? 'Surface' : 'Surface Geology'}
      </button>
    </div>
  );
};

export default Steps;
