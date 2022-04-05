import Head from 'next/head'
import Image from 'next/image'

export default function Learning() {
  return (
    <div className='bg-gray-300 text-center p-12 shadow-inner' id='learning'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>LEARNING</button>
        <div className='flex md:gap-20 justify-center mb-10'>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/figma.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>Figma</p>
               
            </span>
            <span className='bg-transparent-500 ,d:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/react.png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>JavaScript</p>
               
            </span>
            <span className='bg-transparent-500 md:p-3 w-28 h-36'>
                <Image className='rounded-full' src='/php (1).png' alt='html' width={50} height={50} />
                <p className='font-bold m-3'>PHP</p>
                
            </span>
        </div>
    </div>
  )
}
