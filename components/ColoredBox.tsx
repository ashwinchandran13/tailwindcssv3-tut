import React from 'react';

const ColoredBox = () => {
    return (
        <div>
            <div className='grid w-screen h-screen place-items-center'>
                <div className="space-x-16">
                    <button className="px-8 py-3 font-semibold text-white bg-red-300 rounded-full hover:scale-110 ">
                        Subscribe
                    </button>
                    <button className="px-8 py-3 font-semibold text-white rounded-full bg-cyan-500 hover:scale-110">
                        Subscribe
                    </button>
                    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 rounded-full hover:scale-110">
                        Subscribe
                    </button>
                    <button className="px-8 py-3 font-semibold text-white bg-pink-500 rounded-full hover:scale-110">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="grid w-screen h-screen bg-pink-300 place-items-center">
                <div className="space-x-16">
                    <button className="px-8 py-3 font-semibold text-pink-600 bg-white rounded-full shadow-xl hover:scale-110">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColoredBox;
