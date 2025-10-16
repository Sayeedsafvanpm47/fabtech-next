// components/LottieAnimation.js
'use client'; 


import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const IntroComponent = ({ src, width, height, loop, autoplay }) => {
  return (
    <DotLottieReact
      src={src}
      width={width}
      height={height}
      loop={loop}
      autoplay={autoplay}
    />
  );
};

export default IntroComponent;