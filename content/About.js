import Head from "next/head"
import Image from "next/image"

export default function About() {
  return (
    <div className='grid justify-items-center bg-black text-white py-5 pb-5' id="about">
      <span className="flex justify-center p-2 w-28 border-white border font-bold hover:bg-white hover:text-black">ABOUT ME</span>
      <div className="md:flex md:px-16 p-5">
        <span className="flex justify-center w-full mx-1 p-1">
          <Image className="rounded-lg" src="/teslim1.jpg" alt="profile" width={200} height={140} />
        </span>
        <i className="mt-5 text-xl">
          Hi, I am Teslim of Tesimune.
          <br></br>
          Full-Stack Developer, Front-End > Back-End,
          Experienced in Web Application Development, Mobile Application and Desktop Application, Maintenance and Cyber Security.
          <br></br>
          Contact me for any of the services above or related!
        </i>
      </div>
    </div>
  )
}
