import Link from 'next/link';
import React from 'react';
import AccentColor from '../components/AccentColor';
import ColoredBox from '../components/ColoredBox';
import Jit from '../components/Jit';
import MultiColumn from '../components/MultiColumn';
import NativeAspect from '../components/NativeAspect';
import OpenModifier from '../components/OpenModifier';
import ScrollSnap from '../components/ScrollSnap';

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
      <NativeAspect />
      <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
        <h1 className='self-center text-white text-8xl mx-44 '>Comprehensive Scroll Snap</h1>
        <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>CSS only💪</h5>
      </div>
      <ScrollSnap />
      <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
        <h1 className='self-center text-white text-8xl mx-44 '>Scroll Behaviour</h1>
        <Link href='/scroll-behaviour'><a className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400 hover:scale-110'>Scroll to right place⬇️</a></Link>
      </div>
      <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
        <h1 className='self-center text-white text-8xl mx-44 '>Multi-Column Layout</h1>
        <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>Newspaper for web📰</h5>
      </div>
      <MultiColumn />
      <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
        <h1 className='self-center text-white text-8xl mx-44 '>Accent Color & File Inputs</h1>
        <h5 className='self-center mt-3 text-4xl text-white underline shadow-lg decoration-teal-400'>Native form on brand</h5>
      </div>
      <AccentColor />
      <div className='flex justify-start w-screen h-screen bg-gradient-to-br from-indigo-900 to-cyan-800'>
        <h1 className='self-center text-white text-8xl mx-44 '>Open Modifier</h1>
        <h5 className='self-center mt-3 text-5xl text-white underline shadow-lg decoration-teal-400'>Styling open/closed states⏬</h5>
      </div>
      <OpenModifier />
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
