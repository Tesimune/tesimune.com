import { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {MdOutlineCancel} from 'react-icons/md'


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div>
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
          <FaBars onClick={() => setOpen(!open)} 
            className={`md:hidden w-7 h-6 ${open ? 'hidden' : ''}`}/>
          <MdOutlineCancel onClick={() => setOpen(!open)}
            className={`md:hidden w-7 h-6 ${open ? '' : 'hidden'}`} />
        </nav>
        
    </div>
    <div onClick={() => setOpen(!open)}
            className={`bg-transparent absolute grid justify-end w-full p-5 rounded-md md:hidden ${open ? '' : 'hidden'}`} id='menu'>
        <nav className='md:hidden grid gap-7'>
            <a href='#about'><span className='pl-3 font-bold'>About Me</span></a>
            <a href='#skills'><span className='pl-3 font-bold'>Skills</span></a>
            <a href='#index'><span className='pl-3 font-bold'>Portfolio</span></a>
            <a href='#'><span className='pl-3 font-bold'>CV</span></a>
            <a href='#contact'><span className='bg-black text-white p-3 hover:bg-slate-400 rounded-full'>CONTACT ME</span></a>
        </nav>
    </div>
    </div>
  )
}
