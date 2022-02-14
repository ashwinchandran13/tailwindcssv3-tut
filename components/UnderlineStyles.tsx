import React from 'react'

const UnderlineStyles = () => {
  return (
    <div className='grid max-w-6xl min-h-screen mx-auto bg-slate-50 place-items-center'>
        <div className="px-16 mx-auto max-3xl">
            <h1 className='text-6xl tracking-tighter font-poppins'>
                A creative that is leading teams that create digital experiences
            </h1>

            <p className='mt-4 text-2xl text-slate-700'>
                I'm Derek, a creative director based in South Queensferry. When I wake up, I like to start building interfaces at 
                <a href="#" className='font-semibold underline decoration-red-200 text-slate-900'>&nbsp;My Company, Inc</a>. Outside of work, I like to watch
                <a href="#" className='font-semibold underline decoration-blue-300 text-slate-900'>&nbsp;football&nbsp;</a>and
                <a href="#" className='font-semibold underline decoration-amber-500 text-slate-900'>&nbsp;take photos of payments.</a>
            </p>
        </div>
    </div>
  )
}

export default UnderlineStyles