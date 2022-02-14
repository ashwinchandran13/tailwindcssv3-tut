import React from 'react'

const OpenModifier = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <div className="max-w-md px-8 pt-20 mx-auto my-auto ">
            <h1 className='text-6xl'>FAQs</h1>
            <details className='p-4 mt-24 open:bg-white open:rounded-lg open:shadow-xl'>
                <summary className='text-base font-semibold leading-6'>How does it work?</summary>
                <div className="mt-3">
                    <div className="text-base leading-6 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur consequuntur qui sunt, inventore dolores, recusandae quaerat eum sit possimus blanditiis vero et tempore neque corporis iure labore. Magnam voluptatum magni libero, iste vitae minus explicabo quis ipsa molestias.
                    </div>
                </div>
            </details>
            {/* open attibute exists within details tag */}
            <details className='p-4 rounded-lg'>
                <summary className='text-base font-semibold leading-6'>Is it easy to do?</summary>
                <div className="mt-3">
                    <div className="text-base leading-6 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur consequuntur qui sunt, inventore dolores, recusandae quaerat eum sit possimus blanditiis vero et tempore neque corporis iure labore. Magnam voluptatum magni libero, iste vitae minus explicabo quis ipsa molestias.
                    </div>
                </div>
            </details>
            <details className='p-4 rounded-lg'>
                <summary className='text-base font-semibold leading-6'>How much does it cost?</summary>
                <div className="mt-3">
                    <div className="text-base leading-6 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur consequuntur qui sunt, inventore dolores, recusandae quaerat eum sit possimus blanditiis vero et tempore neque corporis iure labore. Magnam voluptatum magni libero, iste vitae minus explicabo quis ipsa molestias.
                    </div>
                </div>
            </details>
            <details className='p-4 rounded-lg'>
                <summary className='text-base font-semibold leading-6'>Will it make me rich?</summary>
                <div className="mt-3">
                    <div className="text-base leading-6 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur consequuntur qui sunt, inventore dolores, recusandae quaerat eum sit possimus blanditiis vero et tempore neque corporis iure labore. Magnam voluptatum magni libero, iste vitae minus explicabo quis ipsa molestias.
                    </div>
                </div>
            </details>
            <details className='p-4 rounded-lg'>
                <summary className='text-base font-semibold leading-6'>For how long?</summary>
                <div className="mt-3">
                    <div className="text-base leading-6 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur consequuntur qui sunt, inventore dolores, recusandae quaerat eum sit possimus blanditiis vero et tempore neque corporis iure labore. Magnam voluptatum magni libero, iste vitae minus explicabo quis ipsa molestias.
                    </div>
                </div>
            </details>
        </div>
    </div>
  )
}

export default OpenModifier