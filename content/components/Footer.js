import Head from 'next/head'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className='grid justify-center bg-slate-900 text-white text-center py-9'>
      <a href="#" className='mb-3'>BACK TO THE TOP</a>
      <span className='flex gap-3 mb-3'>
        <a href='https//:facebook.com/tesimune'>facebook</a>
        <a href='https//:instagram.com/tesimune'>instagram</a>
        <a href='https//:twitter.com/tesimune'>twitter</a>
        <a href='https//:linkedin.com/tesimune'>linkedin</a>
        <a href='https//:wa.com/tesimune'>whatsapp</a>
      </span>
      <a href="#" >@2022 <strong>Teslim</strong> All Right Reserved.</a>
      {/* <span className=''>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span> */}   
    </footer>
  )
}
