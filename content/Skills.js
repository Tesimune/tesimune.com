import Head from 'next/head'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className='bg-gray-200 text-center p-12 shadow-slate-400' id='skills'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>SKILLS</button>
        <p className='flex md:gap-20 justify-center mb-10'>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/html-5.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>HTML</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/css.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>CSS</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 ,d:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/js.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>JavaScript</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/php (1).png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>PHP</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/mysql.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>MySQL</p>
                <p></p>
            </span>
        </p>

       

        <p className='flex md:gap-20 justify-center mb-10'>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/figma.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>Figma</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/bootstrap.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>Bootstrap</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/react.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>React</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/php.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>Laravel</p>
                <p></p>
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/github.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>GitHub</p>
                <p></p>
            </span>
        </p>
    </div>
  )
}
