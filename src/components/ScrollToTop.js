import React from 'react';
import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { CgArrowUpR } from 'react-icons/cg';

import { classNames } from '../util/classNames';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //// toggleVisibility ////
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(isVisible ? 'opacity-100' : 'opacity-0')}
      >
        <CgArrowUpR className='w-8 h-8' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTop;
