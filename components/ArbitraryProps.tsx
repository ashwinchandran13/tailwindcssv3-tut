import React from 'react'

const ArbitraryProps = () => {
  return (
    <div className='grid max-w-5xl min-h-screen mx-auto mt-5 text-gray-500 place-items-center'>
        <div className='flex'>
        {/** add arbitary value like [clip-path:circle(70%_at_20%_30%)] */}
        <img 
        src="https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/4b9f2b75c4a3e68808d181306457d6fcb40966e7/aHR0cDovL3d3dy5ibG9nY2RuLmNvbS93d3cuam95c3RpcS5jb20vbWVkaWEvMjAxMy8wNS9iYW9rYWZpbmFsLmpwZw==" 
        alt="batman-pic" 
        className='float-left object-cover object-center w-64 mb-0 mr-6 rounded-lg shadow-lg aspect-square hover:[clip-path:circle(70%_at_20%_30%)]'
        />
        <p className='text-3xl leading-relaxed tracking-wide'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel perspiciatis consectetur itaque reprehenderit? Esse numquam velit vero dolor similique odio adipisci magni, alias culpa. Cupiditate impedit facere deleniti iste magni voluptate in. Atque iure beatae, pariatur recusandae ex ipsa doloribus fugiat dolor magni? Doloremque provident perspiciatis sit ipsam itaque?
        </p>
        </div>
    </div>
  )
}

export default ArbitraryProps