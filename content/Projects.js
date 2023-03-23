import React from 'react'
import  { BsGithub } from 'react-icons/bs'
import  { BiLinkExternal } from 'react-icons/bi'
import  { AiFillLock, AiFillUnlock } from 'react-icons/ai'

export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center py-16 px-5'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>MY PROJECTS</button>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-slate-900 hover:opacity-90 cursor-pointer grid items-center p-5 h-56 w-80 rounded-lg text-white font-bold text-xl relative'>
                <div className='flex justify-between absolute inset-x-5 bottom-5'>
                    <a className='flex items-center gap-3' target='blank' href='https://www.github.com/tesimune/writer'>
                        <BsGithub className='h-7 w-7' />
                        <span>CODE</span>
                    </a>
                    <AiFillLock className='h-7 w-7' />
                </div>
                <a target='blank' href='https://writer.tudevs.com' className='flex justify-center items-center space-x-3'>
                    <BiLinkExternal className='h-7 w-7' />
                    <span>WRITER</span>
                </a>
            </div>
            <div className='bg-slate-900 hover:opacity-90 cursor-pointer grid items-center p-5 h-56 w-80 rounded-lg text-white font-bold text-xl relative'>
                <div className='flex justify-between absolute inset-x-5 bottom-5'>
                    <a className='flex items-center gap-3' target='blank' href='https://www.github.com/tesimune/tudevs'>
                        <BsGithub className='h-7 w-7' />
                        <span>CODE</span>
                    </a>
                    <AiFillUnlock className='h-7 w-7' />
                </div>
                <a target='blank' href='https://www.tudevs.com' className='flex justify-center items-center space-x-3'>
                    <BiLinkExternal className='h-7 w-7' />
                    <span>TUDEVS</span>
                </a>
            </div>
            <div className='bg-slate-900 hover:opacity-90 cursor-pointer grid items-center p-5 h-56 w-80 rounded-lg text-white font-bold text-xl relative'>
                <div className='flex justify-between absolute inset-x-5 bottom-5'>
                    <a className='flex items-center gap-3' target='blank' href='https://www.github.com/tesimune/algonet'>
                        <BsGithub className='h-7 w-7' />
                        <span>CODE</span>
                    </a>
                    <AiFillUnlock className='h-7 w-7' />
                </div>
                <a target='blank' href='https://algonet.vercel.app' className='flex justify-center items-center space-x-3'>
                    <BiLinkExternal className='h-7 w-7' />
                    <span>ALGONET</span>
                </a>
            </div>
            <div className='bg-slate-900 hover:opacity-90 cursor-pointer grid items-center p-5 h-56 w-80 rounded-lg text-white font-bold text-xl relative'>
                <div className='flex justify-between absolute inset-x-5 bottom-5'>
                    <a className='flex items-center gap-3' target='blank' href='https://www.github.com/tesimune/analogueshifts'>
                        <BsGithub className='h-7 w-7' />
                        <span>CODE</span>
                    </a>
                    <AiFillLock className='h-7 w-7' />
                </div>
                <a target='blank' href='https://www.analogueshifts.com' className='flex justify-center items-center space-x-3'>
                    <BiLinkExternal className='h-7 w-7' />
                    <span>ANALGOUESHIFTS</span>
                </a>
            </div>
            <div className='bg-slate-900 hover:opacity-90 cursor-pointer grid items-center p-5 h-56 w-80 rounded-lg text-white font-bold text-xl relative'>
                <div className='flex justify-between absolute inset-x-5 bottom-5'>
                    <a className='flex items-center gap-3' target='blank' href='https://www.github.com/tesimune/tesimune'>
                        <BsGithub className='h-7 w-7' />
                        <span>CODE</span>
                    </a>
                    <AiFillUnlock className='h-7 w-7' />
                </div>
                <a target='blank' href='https://tesimune.vercel.app' className='flex justify-center items-center space-x-3'>
                    <BiLinkExternal className='h-7 w-7' />
                    <span>TESIMUNE</span>
                </a>
            </div>

        </div>
    </div>
  )
}
