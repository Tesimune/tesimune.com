import Head from 'next/head'


export default function Mobilenavbar() {
  return (
    <div className='bg-transparent absolute grid justify-end w-full p-5 rounded-md hidden'>
        <nav className='md:hidden grid gap-7'>
            <a href='#about'><span className='pl-3 font-bold'>About Me</span></a>
            <a href='#skills'><span className='pl-3 font-bold'>Skills</span></a>
            <a href='#index'><span className='pl-3 font-bold'>Portfolio</span></a>
            <a href='#'><span className='pl-3 font-bold'>CV</span></a>
            <a href='#contact'><span className='bg-black text-white p-3 hover:bg-slate-400 rounded-full'>CONTACT ME</span></a>
        </nav>
    </div>
  )
}
