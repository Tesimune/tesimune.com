import Head from 'next/head'
import Image from 'next/image'
import {BiLoaderCircle} from 'react-icons/bi'
import {SiNodedotjs} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiKalilinux} from 'react-icons/si'

export default function Learning() {
  return (
    <div className='bg-gray-300 text-center p-5 shadow-inner' id='learning'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>LEARNING</button>
        <div className='grid md:grid-cols-4 grid-cols-3 md:gap-10 gap-7 justify-center md:m-10'>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg hover:m-3'>
                <SiNodedotjs className='text-green-700 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Node.JS</p>
                <span className='flex justify-center'><BiLoaderCircle className='text-blue-500'/> <i className='text-xs ml-1'>4/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg hover:m-3'>
                <SiFigma className='text-blue-700 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Figma</p>
                <span className='flex justify-center'><BiLoaderCircle className='text-blue-400'/> <i className='text-xs ml-1'>7/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg hover:m-3'>
                <SiReact className='text-blue-500 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Native</p>
                <span className='flex justify-center'><BiLoaderCircle className='text-blue-400'/> <i className='text-xs ml-1'>5/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg hover:m-3'>
                <SiKalilinux className='w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Kali Linux</p>
                <span className='flex justify-center'><BiLoaderCircle className='text-blue-400'/> <i className='text-xs ml-1'>2/10</i></span>    
            </span>
        </div>
    </div>
  )
}
