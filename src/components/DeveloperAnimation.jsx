import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DeveloperAnimation = () => {
  return (
    <div
      style={{
        filter: 'drop-shadow(0 0 40px rgba(var(--primary-rgb), 0.55)) drop-shadow(0 0 80px rgba(var(--primary-rgb), 0.25))',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DotLottieReact
        src="https://assets-v2.lottiefiles.com/a/1b61a708-1178-11ee-ac4b-bbd057270897/iZZOaqcLNZ.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DeveloperAnimation;
