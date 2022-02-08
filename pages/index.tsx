import Link from 'next/link';
import React from 'react';
import ColoredBox from '../components/ColoredBox';
import Jit from '../components/Jit';
import PrintModifier from '../components/PrintModifier';

const index = () => {
  return (
   <div className='relative overflow-x-clip'>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>Just-In-Time Engine</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>Lighting Fast Build Times⚡</h5>
     </div>
     <Jit />
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>More Colors Palletes</h1>
      <a href='https://tailwindcss.com/docs/customizing-colors' className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-lime-500 hover:scale-110'>Color Reference🌈</a>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>Colored Box Shadows</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>Glow and Reflections💫</h5>
     </div>
     <ColoredBox />
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>Print Modifier</h1>
      <Link href='/print-modifier'><a className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400 hover:scale-110'>CSS for Printing🖨️</a></Link>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>Native Aspect Ratios</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>Without plugin🌝</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
     <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
      <h1 className='self-center text-white text-8xl mx-44 '>tailwindcss V3.0</h1>
      <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>What's new?</h5>
     </div>
   </div>
  );
};

export default index;
