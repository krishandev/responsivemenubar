"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import me from '../public/krishanimg.svg'
import Link from 'next/link'
import {BsList, BsX, BsYoutube, BsPinterest} from 'react-icons/bs'

const styles={
    navLinks:"text-xl cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6B519]"
}

const Header = () => {
    const [menuopen, setMenuopen]=useState(false);
    const toggleMenu=()=>setMenuopen(!menuopen);
    
  return (
    <header>
        <nav className=' w-full h-29 shadow-xl bg-blue-500'>
            {/* Desktop Menu */}
            <div className=' flex justify-between items-center h-full px-4 w-full'>
                <Link href={'/'}>
            <Image src={me} width={205} height={75} alt='krishan' />
            </Link>

            <div className='text-white hidden sm:flex'>
                <ul className=' hidden sm:flex'>
                    <li className={styles.navLinks}><Link href={'/'}>Home</Link></li>
                    <li className={styles.navLinks}><Link href={'/'}>About</Link></li>
                    <li className={styles.navLinks}><Link href={'/'}>Services</Link></li>
                    <li className={styles.navLinks}><Link href={'/'}>Contact</Link></li>
                    <li className='flex items-center space-x-5 text-[#F6B519] ml-10'><h3 className='bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519] rounded-full px-4 py-1 cursor-pointer border border-[#F6B519] ease-in-out duration-300'>Sign In</h3></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div onClick={toggleMenu} className='sm:hidden cursor-pointer pl-24'>
            <BsList className="w-8 h-8 text-[#F6B519]"/>
            </div>
            </div>

            <div className={menuopen?
            " fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500":" fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
            <div className='flex w-full items-center justify-end'>
                <div onClick={toggleMenu} className='cursor-pointer'>
                    <BsX className="h-8 w-8 text-[#F6B519]"/>
                </div>
            </div>
            {/* Mobile Menu Links */}
            <div className='flex-col py-4'>
             <ul>
                <li onClick={()=>setMenuopen(false)} className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href={"/"}>Home</Link></li>
                <li onClick={()=>setMenuopen(false)} className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href={"/"}>About</Link></li>
                <li onClick={()=>setMenuopen(false)} className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href={"/"}>Services</Link></li>
                <li onClick={()=>setMenuopen(false)} className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href={"/"}>Contact</Link></li>
                <li className='flex items-center py-4'><p className='bg-[#F6B519] text-black rounded-full py-1 px-4 cursor-pointer hover:bg-black hover:text-[#F6B519] ease-in-out duration-300'>Sign In</p></li>
             </ul>
            </div>
            {/* Social Media Links */}
            <div className='flex flex-row justify-around pt-10 items-center'>
                <Link href={"https://www.youtube.com"}>
                    <BsYoutube size={30} className=" cursor-pointer hover:text-[#F6B519] ease-in-out duration-300"/>
                </Link>
                <Link href={"https://www.pinterest.com"}>
                    <BsPinterest size={30} className=" cursor-pointer hover:text-[#F6B519] ease-in-out duration-300"/>
                </Link>
            </div>
            <Image src={me} alt='krishan' width={205} height={75} className=' cursor-pointer pt-10 mx-auto'/>
            </div>
            
        </nav>
        
    </header>
  )
}

export default Header