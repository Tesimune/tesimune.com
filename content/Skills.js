import Head from 'next/head'
import Image from 'next/image'
import {BsStarFill} from 'react-icons/bs'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import {SiVuedotjs} from 'react-icons/si'


export default function Skills() {
  return (
    <div className='bg-gray-200 text-center p-3 shadow-slate-400' id='skills'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>SKILLS</button>
        <div className='grid md:grid-cols-4 grid-cols-3 md:gap-10 gap-7 justify-center md:m-10'>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiHtml5 className='text-orange-700 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>HTML</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-500'/> <i className='text-xs ml-1'>10/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiCss3 className='text-blue-600 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>CSS</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>8/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiJavascript className='text-yellow-500 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>JS</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
                
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiPhp className='text-purple-900 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>PHP</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
                
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiBootstrap className='text-purple-500 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Bootstrap</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>8/10</i></span>
               
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiTailwindcss className='text-blue-500 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Tailwind</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>9/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiReact className='text-blue-400 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>React</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiLaravel className='text-red-600 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Laravel</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
                
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiGithub className='w-16 h-14 m-3'/>
                <p className='font-bold m-3'>GitHub</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>8/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiVuedotjs className='text-green-500 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Vue</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>8/10</i></span>
                
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiNextdotjs className='w-16 h-14 m-3'/>
                <p className='font-bold m-3'>Next</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
            </span>
            <span className='grid justify-center bg-transparent-500 md:p-3 md:w-36 h-44 shadow-2xl shadow-black rounded-lg'>
                <SiMysql className='text-orange-700 w-16 h-14 m-3'/>
                <p className='font-bold m-3'>MySQL</p>
                <span className='flex justify-center'><BsStarFill className='text-yellow-400'/> <i className='text-xs ml-1'>7/10</i></span>
                
            </span>

        </div>
    </div>
  )
}
