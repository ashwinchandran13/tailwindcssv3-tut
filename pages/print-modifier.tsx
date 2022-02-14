import Image from 'next/image';
import React from 'react';

import cookypic from '../public/assets/cookypic.jpg'

const PrintModifier = () => {
  return (
    // print modifiers
    <div className='w-screen h-screen overflow-x-clip bg-stone-50 text-stone-600'>
      {/* print modifier */}
      <nav className='grid grid-cols-2 p-10 h-fit place-items-stretch print:hidden'>
        <h1 className='text-3xl select-none font-poppins'>CookyBook</h1>
        <div className='flex justify-end space-x-4'>
          <a type='button' className='self-center pr-3 border-r-2'>Create Account</a>
          <a type='button' className='self-center'>Login</a>
        </div>
      </nav>

      <div className='grid grid-cols-2 gap-10 pr-24 place-self-center'>
        <div className='flex flex-col col-span-1 justify-self-end'>
          <Image
            alt='cooky image'
            src={cookypic}
            className='rounded-lg shadow-lg'
            width={400}
            height={500}
            layout='intrinsic'
          />
          <div className='pt-10'>
            <h5 className='font-semibold'>Ingredients</h5>
            <ul className='mt-10 space-y-3 list-none'>
              <li>120gm of salted css</li>
              <li>85gm sugured react</li>
              <li>1 medium framework</li>
              <li>2 tbsp vanilla js</li>
              <li>A bowl of rendering issues</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col w-3/4 col-span-1 justify-self-start'>
          <div className='font-mono text-base tracking-wide'>Cookie recipes</div>
          <h3 className='text-3xl font-semibold'>Chocolate Chip Cookies</h3>
          <div className='flex py-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#00000074">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <p className='leading-relaxed tracking-normal'>
            This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!
          </p>
          <div className='grid grid-cols-3 gap-10 p-4 place-content-center'>
            <span className='flex justify-self-center'>
              <p className='pr-1 font-semibold'>Prep:</p><p>3 mins</p>
            </span>
            <span className='flex justify-self-center'>
              <p className='pr-1 font-semibold'>Serves:</p><p>3/4</p>
            </span>
            <span className='flex justify-self-center'>
              <p className='pr-1 font-semibold'>Cook:</p><p>7 mins</p>
            </span>
          </div>
          <div className='flex flex-col mt-10'>
            <h5 className='font-semibold'>Step 1</h5>
            <p className='py-3'>
              The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl.

              When doing this, make sure to Measure the flour correctly. Be sure to use a measuring cup made for dry ingredients (NOT a pyrex liquid measuring cup).
            </p>
          </div>
          <div className='flex flex-col mt-14'>
            <h5 className='font-semibold'>Step 2</h5>
            <p className='py-3'>
              Next, cream together butter and sugars, make sure to soften the butter early by taking it out of the fridge at least two hours before baking so it's ready to go when you need it.
            </p>
          </div>
          <div className='flex flex-col mt-14'>
            <h5 className='font-semibold'>Step 3</h5>
            <p className='py-3'>
              Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.
            </p>
          </div>
          <div className='flex justify-between border-t-2 mt-9 print:hidden'>
            <button className='px-4 py-2 font-semibold border-2 rounded-lg mt-9 hover:bg-slate-200 w-fit drop-shadow-lg' onClick={() => {window.print();return false;}}>Print</button>
            <button className='px-4 py-2 font-semibold border-2 rounded-lg mt-9 hover:bg-slate-200 w-fit drop-shadow-lg'>Save this recipe</button>
          </div>
        </div>
      </div>

      {/*print modifier*/}
      <footer className='grid content-center w-screen grid-cols-3 p-4 mt-20 border-t-2 print:hidden h-1/3 justify-items-center'>
        <div className='col-span-1'>
          <ul className='space-y-4 text-center'>
            <li className='font-semibold'>Company</li>
            <li>React</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Svelt</li>
            <li>lol</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='space-y-4 text-center'>
            <li className='font-semibold'>Cook!</li>
            <li>Skills</li>
            <li>Makes</li>
            <li>You</li>
            <li>Strong</li>
            <li>Invincible</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='space-y-4 text-center'>
            <li className='font-semibold'>Privacy</li>
            <li>Policies</li>
            <li>Data</li>
            <li>Collection</li>
            <li>Personal</li>
            <li>Advertisments</li>
          </ul>
        </div>
      </footer>

    </div>
  );
};

export default PrintModifier;
