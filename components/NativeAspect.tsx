import Image from 'next/image';
import React from 'react';

import aspectPic from '../public/assets/aspectPic.jpeg';

const NativeAspect = () => {
    return (
        <div className="grid min-h-screen bg-slate-200 place-items-center">
            <div className="w-full max-w-4xl p-8 mx-auto">
                {/* <div className="aspect-h-9 aspect-w-16"> */}
                <iframe 
                className='w-full'
                src="https://www.youtube.com/embed/_Lo6Vup6khc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            <div className='grid bg-slate-200 place-items-center'>
                <div className="p-8 mx-auto max-w-7xl">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg ">
                        {/* square and arbitary example */}
                        <img src='https://i.pinimg.com/736x/05/18/ac/0518aced41687a96b97e6bed4b52498b.jpg' className='object-cover w-full h-48' alt="" />
                    </div>
                    <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                        <div className='flex-1'>
                        <p className='text-sm font-medium text-indigo-600'>
                            <a href="#" className='hover:underline'>Case Study</a>
                        </p>
                        <div className='block'>
                            <h4 className='text-3xl'>B & B</h4>
                        </div>
                        <div className='block'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, deserunt debitis. Reiciendis recusandae corporis quidem ratione, harum eligendi soluta officia facere nam incidunt culpa, voluptatibus consequatur voluptate, libero odio suscipit modi exercitationem quos unde et similique hic earum repudiandae. Ea consequatur unde facilis accusamus placeat corrupti nobis?
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NativeAspect;
