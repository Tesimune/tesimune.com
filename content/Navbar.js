import Head from 'next/head'

export default function Navbar() {
  return (
    <div className='md:pt-14 md:px-20 p-5' id='navbar'>
        <nav className='flex justify-between'>
            <div className='font-bold font-san'>TESIMUNE</div>
            <div className='hidden md:block'>
            <div className='flex gap-9'>
                <a href='#about'><span className='font-bold'>About Me</span></a>
                <a href='#skills'><span className='font-bold'>Skills</span></a>
                <a href='#index'><span className='font-bold'>Portfolio</span></a>
                <a href='#'><span className='font-bold'>CV</span></a>
                <a href='#contact'><span className='bg-black text-white p-3 hover:bg-slate-400 rounded-full'>CONTACT ME</span></a>
            </div>  
            </div>       
        </nav>
    </div>
  )
}
