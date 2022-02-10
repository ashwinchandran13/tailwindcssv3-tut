import React from 'react';

import { scrollData } from '../constants/data';

const ScrollSnap = () => {
    return (
        <div className='relative mt-32'>
            <h1 className='text-5xl font-extrabold tracking-tight text-center'>Get away this winter</h1>
            {/* scroll container */}
            <ul className="mt-10 pb-8 px-[50vw] w-full flex overflow-x-auto gap-8 snap-x">
                {scrollData.map((item) => (
                    // snap each child
                    <li key={item.id}>
                        <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                            <img src={item.image_path} alt={item.name} className='absolute inset-0 object-cover object-bottom w-full h-full' />
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75" />
                            <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                                <p className='font-medium text-white'>Destinations</p>
                                <h2 className='w-2/3 mt-3 text-3xl font-semibold tracking-tight text-white'>
                                    {item.name}
                                </h2>
                            </div>
                            <a href="" className='px-4 py-3 text-sm font-medium rounded-lg bh-white text-slate-900'>Browse Destinations</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrollSnap;
