'use client'
// import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { navLinks } from './content';
import { DropdownMenuCheckboxes } from './Dropdown';
import LoginButton from './LoginButton';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const textLinkClasses = "text-[16px] text-gray-500 hover:text-gray-900 active:text-gray-400";

  return (
    <>
      <section className='bg-[#ffffff] sticky z-50 top-0'>
        <nav className="relative flex h-[12vh] items-center max-w-7xl px-2 md:px-8 justify-between xl:m-auto lg:px-12">
          <div className=' flex items-center'>
            <Link href='/'>
              <Image
                src='/CreditGrow.png'
                alt='creditgrow logo'
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="sm:flex space-x-4 items-center ml-4 hidden lg:ml-8 lg:space-x-8">
            {navLinks?.map((link, index) => (
              <Link href={link.href} key={index} className={textLinkClasses}>{link.child}</Link>
            ))}
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <LoginButton />
              <div className='sm:hidden' onClick={() => setIsOpen(!isOpen)}>
                <DropdownMenuCheckboxes />
              </div>
              <Link href="/signup" className="bg-gray-800 text-white rounded-xl px-5 py-3  hover:bg-gray-900 active:bg-gray-600 hidden sm:block md:flex items-center gap-2 capitalize">get started
              </Link>
            </div>
          </div>
        </nav>

      </section>

    </>
  )
}

export default Nav