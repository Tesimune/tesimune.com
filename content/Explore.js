import Head from 'next/head'
import Image from 'next/image'

export default function Explore() {
  return (
    <div className='bg-white text-center p-12' id='explore'>
        <button className='border-2 py-1 px-9 mt-6 mb-10 border-black hover:bg-slate-900 hover:text-white'>EXPLORE</button>
        <div className='md:flex gap-3'>
            <span>
                <Image src="/19362653.jpg" alt="illustration" width={450} height={300} />
                <p className='font-bold m-3'>DESIGN</p>
                <p>Experienced in use of Figma <br></br>and Application to HTML CSS and Javascript </p>
            </span>
            <span>
                <Image src="/5995345.jpg" alt="illustration" width={450} height={300} />
                <p className='font-bold m-3'>DEVELOPMENT</p>
                <p>Full-Stack Developer experienced in the use of HTML CSS Javascript PHP <br></br>and Related frame work</p>
            </span>
            <br></br>
            <span>
                <Image src="/4380747.jpg" alt="illustration" width={300} height={300} />
                <p className='font-bold m-3'>MAINTENANCE</p>
                <p>Site Maintenance and upgrade</p>
            </span>
            <span>
                <Image src="/4421964.jpg" alt="illustration" width={300} height={300} />
                <p className='font-bold m-3'>SECURITY</p>
                <p>Experienced in Cyber security and Ethical hacking</p>
            </span>
        </div>
    </div>
  )
}
