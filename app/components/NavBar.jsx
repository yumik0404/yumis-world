import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Gallery",
        path: "#gallery",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#FDE9D2] bg-opacity-90">
  <div className='flex flex-wrap items-center justify-between max-auto p-6'>
    <Link href={"/"} className="text-2xl md:text-5xl text-[#393031] font-semibold"> YUMI KIM </Link>
    <div className="menu block md:w-auto" id="navbar">
      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
       {
        navLinks.map((link,index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} />
            </li>
        )
    )
       }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar