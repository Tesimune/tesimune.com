import Head from 'next/head'
import Image from 'next/image'
import {BsArrowUpSquareFill} from 'react-icons/bs'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SiWhatsapp} from 'react-icons/si'


export default function Footer() {
  return (
    <footer className='grid justify-center bg-slate-900 text-white text-center py-9'>
      <a href="#" className='flex gap-3 justify-center mb-3'>
      <span>BACK TO THE TOP</span>
      <span><BsArrowUpSquareFill className='w-7 h-6'/></span>
      </a>
      <span className='flex justify-center gap-3 mb-3'>
        <a href='https//:facebook.com/tesimune' target='_blank'><TiSocialFacebook/></a>
        <a href='https//:instagram.com/tesimune' target='_blank'><TiSocialInstagram/></a>
        <a href='https//:twitter.com/tesimune' target='_blank'><TiSocialTwitter/></a>
        <a href='https//:linkedin.com/tesimune' target='_blank'><TiSocialLinkedin/></a>
        <a href='https//:wa.com/tesimune' target='_blank'><SiWhatsapp/></a>
      </span>
      <a href="#" >@2022 <strong>Teslim</strong> All Right Reserved.</a>  
    </footer>
  )
}
