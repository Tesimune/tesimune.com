import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Message() {
  return (
    <div className='bg-gray-200 text-center p-12' id='message'>
      <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>SEND A MESSAGE</button>
      <form className='grid gap-3 justify-items-center'>
        <input className='md:w-3/5  w-full p-3 rounded border-l-2 border-black outline-none shadow-2xl' type='email' placeholder='Email Address'/>
        <input className='md:w-3/5 p-3 w-full rounded border-l-2 border-black outline-none shadow-2xl' type='text' placeholder='Name'/>
        <textarea className='md:w-3/5 p-3 w-full rounded border-l-2 border-black outline-none shadow-2xl' type='text' placeholder='Message'/>
        <Link href="mailto:tesimune@gmail.com">
          <a target='_blank' className='bg-blue-300 p-3 rounded-md w-28 font-semibold shadow-2xl'>SUBMIT</a>
        </Link>
      </form>
    </div>
  )
}

