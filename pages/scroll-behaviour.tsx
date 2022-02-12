import React from 'react'
import { beverages, deserts, mainCourse, starters } from '../constants/data'

const ScrollBehaviour = () => {
    return (
        <div className='w-screen h-screen overflow-x-clip bg-stone-50 text-stone-600'>
            <nav className='fixed grid w-full grid-cols-2 px-10 py-4 bg-white shadow-md h-fit place-items-stretch'>
                <h1 className='text-3xl select-none font-poppins'>CookyBook</h1>
                <div className='flex justify-end space-x-4'>
                    <a href='#starters' type='button' className='self-center pr-3 border-r-2 hover:text-teal-500'>Starters</a>
                    <a href='#main-course' type='button' className='self-center pr-3 border-r-2 hover:text-teal-500'>Main Course</a>
                    <a href='#desert' type='button' className='self-center pr-3 border-r-2 hover:text-teal-500'>Desert</a>
                    <a href='#beverage' type='button' className='self-center pr-3 hover:text-teal-500'>Beverage</a>
                </div>
            </nav>
            <div className='py-10 px-44'>
                <section id='starters' className='pt-10 mt-24'>
                    <h3 className='text-2xl'>Starters</h3>
                    <div className='flex flex-wrap'>
                        {starters.map((item) => (
                            <img src={item.image_path} alt='starters' key={item.id} className='object-cover w-56 h-56 mt-10 mr-10 rounded-md shadow-lg aspect-square' />
                        ))}
                    </div>
                </section>

                <section id='main-course' className='pt-10 mt-24 border-t-2'>
                    <h3 className='text-2xl'>Main Course</h3>
                    <div className='flex flex-wrap'>
                        {mainCourse.map((item) => (
                            <img src={item.image_path} alt='starters' key={item.id} className='object-cover w-56 h-56 mt-10 mr-10 rounded-md shadow-lg aspect-square' />
                        ))}
                    </div>
                </section>

                <section id='desert' className='pt-10 mt-24 border-t-2'>
                    <h3 className='text-2xl'>Desert</h3>
                    <div className='flex flex-wrap'>
                        {deserts.map((item) => (
                            <img src={item.image_path} alt='starters' key={item.id} className='object-cover w-56 h-56 mt-10 mr-10 rounded-md shadow-lg aspect-square' />
                        ))}
                    </div>
                </section>

                <section id='beverage' className='pt-10 mt-24 border-t-2'>
                    <h3 className='text-2xl'>Beverage</h3>
                    <div className='flex flex-wrap'>
                        {beverages.map((item) => (
                            <img src={item.image_path} alt='starters' key={item.id} className='object-cover w-56 h-56 mt-10 mr-10 rounded-md shadow-lg aspect-square' />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ScrollBehaviour