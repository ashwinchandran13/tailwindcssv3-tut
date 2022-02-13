import React from 'react'

const AccentColor = () => {
  return (
    <div className='grid min-h-screen place-items-center'>
        <div className='w-full max-w-md px-8 mx-auto'>
            {/* accent color for form inputs goes here */}
            <form className='space-y-10 '>
                <div>
                    <label htmlFor="first-name" className='block ml-4 text-sm font-medium leading-6 text-slate-900'>
                        First Name
                    </label>
                    <input 
                        type="text" 
                        id="first-name"
                        name="first-name"
                        className='w-full px-4 py-2 mt-1 text-sm leading-6 rounded-full bg-slate-100 focus:outline-violet-500 text-slate-700'
                    />
                </div>
                <div>
                    <label htmlFor="last-name" className='block ml-4 text-sm font-medium leading-6 text-slate-900'>
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        id="last-name"
                        name="last-name"
                        className='w-full px-4 py-2 mt-1 text-sm leading-6 rounded-full bg-slate-100 focus:outline-violet-500 text-slate-700'
                    />
                </div>

                <div className="flex items-center">
                    <img src='https://avatarfiles.alphacoders.com/211/211184.jpg' alt="photo" className='w-16 h-16 rounded-full' />
                    <input type="file" className='ml-6 text-sm leading-6 text-slate-500' />
                </div>

                <div className="ml-4">
                    <h2 className='text-sm font-medium leading-6 text-slate-900'>Two-Factor Authentication</h2>
                    <div className="grid grid-cols-2 mt-2">
                        <label className='flex items-center'>
                            <input type="radio" name='2fa' value="SMS" className='focus:outline-violet-500' />
                            <span className='ml-3 text-sm leading-6 text-slate-700'>SMS</span>
                        </label>
                        <label className='flex items-center'>
                            <input type="radio" name='2fa' value="SMS" className='focus:outline-violet-500' />
                            <span className='ml-3 text-sm leading-6 text-slate-700'>Authenticate</span>
                        </label>
                    </div>
                </div>

                <div className="pb-10 ml-4 border-b-2">
                    <h2 className='text-sm font-medium leading-6 text-slate-900'>Email Preferences</h2>
                    <div className="grid mt-2">
                        <label className='flex items-center'>
                            <input type="checkbox" name='2fa' value="SMS" className='focus:outline-violet-500' />
                            <span className='ml-3 text-sm leading-6 text-slate-700'>Receive product updates via email</span>
                        </label>
                    </div>
                </div>

                <div className='grid ml-4 place-items-end'>
                    <input type="submit" name='submit' value='Save Changes' className='px-4 py-2 font-semibold text-white rounded-full cursor-pointer bg-violet-500' />
                </div>

            </form>
        </div>
    </div>
  )
}

export default AccentColor