import React from 'react'

const MultiColumn = () => {
    return (
        <article className='max-w-3xl px-8 py-24 mx-auto text-lg font-junicode'>
            <header className='text-center'>
                <h1 className='max-w-3xl mx-auto text-4xl italic font-semibold font-junicode md:text-5xl'>
                    This is a Multi Column Layout Demonstration Content to be tested with
                </h1>
                <p className='mt-4'>
                    <span>Feb 13, 2022</span>
                    <span className='text-slate-400'>&middot;</span>
                    <span>by Developer Ashwin Chandran</span>
                </p>
            </header>
            {/*grid method not so practical*/}
            <div className="mt-10 space-y-8 columns-xs">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium modi quia adipisci. Vero laboriosam, ipsum voluptatibus molestiae assumenda mollitia tempore tempora quibusdam ea numquam delectus itaque excepturi alias? Dolore, magni.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate numquam atque illum sapiente autem voluptas non exercitationem veritatis. Iusto quas temporibus nisi dolorem autem? Amet, atque similique. Veniam maxime consequatur et laboriosam fuga animi tempora ea perspiciatis unde nam quia, dolore alias itaque ratione, repudiandae quasi nobis doloremque aut quisquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut itaque accusantium consequatur, aliquid unde blanditiis distinctio. Ducimus facere illo voluptatum cum ipsam explicabo vero. Non facere nulla recusandae ipsum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus quod aliquam quidem culpa hic ab aperiam ut eum. Dolorum.</p>

            </div>

        </article>
    )
}

export default MultiColumn