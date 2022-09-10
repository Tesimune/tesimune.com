import Head from 'next/head'
import Image from 'next/image'
import {BsArrowUpSquareFill} from 'react-icons/bs'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SiWhatsapp} from 'react-icons/si'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className='grid justify-center bg-slate-900 text-white text-center py-9'>
      <a href="#" className='flex gap-3 justify-center mb-3'>
      <span>BACK TO THE TOP</span>
      <BsArrowUpSquareFill className='w-7 h-6'/>
      </a>
      <span className='flex justify-center gap-3 mb-3'>
        <Link href='https://facebook.com/tesimune'>
          <a target='_blank'><TiSocialFacebook/></a>
        </Link>
        <Link href='https://instagram.com/tesimune'>
        <a target='_blank'><TiSocialInstagram/></a>

        </Link>
        <Link href='https://twitter.com/tesimune'>
          <a target='_blank'><TiSocialTwitter/></a>
        </Link>
        <Link href='https://www.linkedin.com/in/tesimune/'>
          {/* https://www.linkedin.com/in/teslim-abdulwahab-151b72201/ */}
          <a target='_blank'><TiSocialLinkedin/></a>
        </Link>
        <Link href='https://wa.me/08067988642'>
          <a target='_blank'><SiWhatsapp/></a>
        </Link>
      </span>
      <a href="#" >@{new Date().getFullYear()} <strong>Teslim</strong> &copy; All Right Reserved.</a>  
    </footer>
  )
}
