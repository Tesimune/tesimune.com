import Head from 'next/head'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='bg-white text-center p-9' id='contact'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>CONTACT</button>
        <div className='md:flex gap-3'>
            <span>
              <Image src="/2517915.jpg" alt="illustration" width={250} height={250} />
            </span>
            
        </div>
    </div>
  )
}
