'use client'
import LogoutModal from '@/components/logoutmodal/LogoutModal'
import { AlignJustify, AppWindow, LayoutDashboard, Settings, WalletMinimal, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const listArray = [
    { name: 'Dashboard', link: '/dashboard', icon: <LayoutDashboard /> },
    { name: 'Application', link: '/dashboard/application', icon: <AppWindow /> },
    { name: 'Wallet', link: '/dashboard/wallet', icon: <WalletMinimal /> },
    { name: 'Account', link: ['/dashboard/account', '/dashboard/account/security'], icon: <Settings /> },
  ]
  const activeRoute = listArray.find((item) => item.link === pathname)
  const heading = activeRoute?.name || 'Dashboard'

  return (
    <section className='h-screen flex'>
      {/* Sidebar for mobile and desktop */}
      <div className={`fixed inset-0 z-[999] bg-white w-full h-full p-2 md:p-8 transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between items-center'>
          <Image
            src='/CreditGrow.png'
            alt='creditgrow logo'
            width={100}
            height={50}
            className=' cursor-pointer'
          />
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div>
          {listArray.map((item, index) => {
            const isActive = Array.isArray(item.link)
              ? item.link.includes(pathname)
              : pathname === item.link;

            return (
              <Link
                href={Array.isArray(item.link) ? item.link[0] : item.link}
                key={index}
                onClick={() => setOpen(false)}
                className={`flex gap-2 px-4 py-3 cursor-pointer my-2 font-[400] rounded
                  ${isActive ? 'bg-[#ebf3ff] border-l-[4px] border-[#2f7ff8] text-[#2f7ff8]' : 'text-gray-600'}`}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            );
          })}
          <div className='w-full' onClick={() => setOpen(false)}>
            <LogoutModal logout="Logout" className="w-full border-none flex justify-start gap-2 text-[15px] items-center px-4 py-3 cursor-pointer my-2 font-[400] rounded
    active:bg-[#ebf3ff] active:border-l-[4px] active:border-[#2f7ff8] active:text-[#2f7ff8] text-gray-600" />
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className='hidden lg:block sticky top-0 z-50 w-[20%] bg-[#ffff]'>
        <Image
            src='/CreditGrow.png'
            alt='creditgrow logo'
            width={100}
            height={50}
            className=' cursor-pointer'
          />
        <div>
          {listArray.map((item, index) => {
            const isActive = Array.isArray(item.link)
              ? item.link.includes(pathname)
              : pathname === item.link;
            return (
              <Link
                href={Array.isArray(item.link) ? item.link[0] : item.link}
                key={index}
                className={`flex gap-2 px-[3rem] py-2 cursor-pointer my-2 font-[400]
                  ${isActive ? 'bg-[#ebf3ff] border-r-[4px] border-[#2f7ff8] text-[#2f7ff8]' : 'text-gray-600'}`}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            );
          })}
          <LogoutModal logout='Logout' className={`w-full text-[16px] border-none flex justify-start gap-2 items-center  px-[3rem] py-2 cursor-pointer my-2 font-[400]
                  active:bg-[#ebf3ff] active:border-r-[4px] active:border-[#2f7ff8] active:text-[#2f7ff8]  text-gray-600`} />
        </div>
      </div>

      {/* Main content area */}
      <div className='flex-1 bg-gray-200 overflow-y-auto flex flex-col'>
        <div className='p-4 bg-[#ffff] sticky z-50 top-0'>
          {/* Mobile nav toggle */}
          <nav className='flex lg:hidden items-center justify-between'>
            <Image
              src='/CreditGrow.png'
              alt='creditgrow logo'
              width={100}
              height={50}
            className=' cursor-pointer'
            />
            <button onClick={() => setOpen(true)}>
              <AlignJustify size={25} />
            </button>
          </nav>

          {/* Main nav */}
          <nav className='flex items-center justify-between'>
            <h1 className='text-[24px] font-[700]'>{heading}</h1>
            <Link href='/dashboard/application' className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600">
              Apply Now
            </Link>
          </nav>
        </div>

        {/* Children container */}
        <div className='p-4 flex-1'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default DashboardLayout
