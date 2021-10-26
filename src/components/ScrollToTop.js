import React from 'react';
import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

import { classNames } from '../util/classNames';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    <div className='fixed bottom-2 right-2'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus: ring-offset-2 focus:ring-pink-500 '
        )}
      >
        <BiArrowFromBottom className='w-6 h-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTop;
