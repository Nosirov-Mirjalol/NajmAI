import { useState } from 'react'
import { logo } from '../assets/images'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='container max-w-[1270px] mx-auto flex justify-between items-center'>
            <div className='flex items-center cursor-pointer'>
                <img className='w-14' src={logo} alt="logo" />
                <p className='text-2xl font-semibold'>NajmAI</p>
            </div>
            <div className='flex items-center gap-3 relative'>
                <a className='text-lg font-semibold' href='https://github.com/Nosirov-Mirjalol?tab=repositories'>More Templates</a>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center justify-center w-14 h-10 bg-[#292a2b] py-1 cursor-pointer px-2 rounded-xl"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                        className={`absolute ${isOpen ? "w-9" : "w-6 mb-2"} h-1 bg-white rounded origin-center`}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 8 }}
                        className={`absolute ${isOpen ? "w-9" : "w-6"} h-1 bg-white rounded origin-center`}
                        transition={{ duration: 0.3 }}
                    />
                </button>
                {isOpen && <motion.ul initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0, transition:{duration:1}}} className='absolute top-12 right-10 bg-[#292a2b] w-56 px-3 py-2 rounded-lg'>
                    <li className='text-lg py-1'><a href="">Home</a></li>
                    <li className='text-lg py-1'><a href="">How it Work</a></li>
                    <li className='text-lg py-1'><a href="">Features</a></li>
                    <li className='text-lg py-1'><a href="">Pricing</a></li>
                    <li className='text-lg py-1'><a href="">Blog</a></li>
                    <li className='text-lg py-1'><a href="">Faqs</a></li>
                    <li className='text-lg py-1'><a href="">Contact</a></li>
                </motion.ul>
                }
            </div>
        </nav>
    )
}

export default Navbar