import Head from 'next/head'
import Image from 'next/image'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SiWhatsapp} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import Link from 'next/link'


export default function Contact() {
  return (
    <div className='bg-white text-center p-9' id='contact'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>CONTACT</button>
        <div className='md:flex gap-3'>
          <span className='rounded-full'>
            <Image src="/2517915.jpg" alt="illustration" width={250} height={250} />
          </span>
          <span className='grid justify-center md:grid-cols-6 grid-cols-3 gap-3 m-3'>
            <Link href='https://instagram.com/tesimune' >
              <a target='_blank' className='grid justify-center m-9'><TiSocialInstagram className='w-16 h-14 text-white shadow-2xl shadow-black bg-red-700 rounded-lg p-2'/><span className='font-bold'>Instagram</span></a>
            </Link>
            <Link href='https://twitter.com/tesimune'>
              <a target='_blank' className='grid justify-center m-9'><TiSocialFacebook className='w-16 h-14 text-white shadow-2xl shadow-black bg-blue-800 rounded-lg p-2'/><span className='font-bold'>Facebook</span></a>
            </Link>
            <Link href='https://facebook.com/tesimune'>
              <a target='_blank' className='grid justify-center m-9'><TiSocialTwitter className='w-16 h-14 text-white shadow-2xl shadow-black bg-blue-400 rounded-lg p-2'/><span className='font-bold'>Twitter</span></a>
            </Link>
            <Link href='https://linkedin.com/tesimune'>
              <a target='_blank' className='grid justify-center m-9'><TiSocialLinkedin className='w-16 h-14 text-white shadow-2xl shadow-black bg-blue-800 rounded-lg p-2'/><span className='font-bold'>Linkedin</span></a>
            </Link>
            <Link href='https://wa.me/08067988642'>
              <a target='_blank' className='grid justify-center m-9'><SiWhatsapp className='w-16 h-14 text-white shadow-2xl shadow-black bg-green-500 rounded-lg p-2'/><span className='font-bold'>WhatsApp</span></a>
            </Link>
            <Link href='tel:+234867988642'>
              <a className='grid justify-center m-9'><FiPhoneCall className='w-16 h-14 text-white shadow-2xl shadow-black bg-green-700 rounded-lg p-2'/><span className='font-bold'>Call</span></a>
            </Link>
          </span>
        </div>
    </div>
  )
}
