"use client"
import { useState } from "react"
import { navLinks } from "./content"
import { motion } from "framer-motion";
import './nav.css'
import Link from "next/link";

export function DropdownMenuCheckboxes() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <label className="hamburger">
        <input type="checkbox" onClick={toggleMenu} checked={isOpen} readOnly />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 top-[6rem] bg-white z-50 w-screen h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden"
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 text-lg"
            >
              <Link href={link.href} className="block w-full text-gray-700">
                {link.child}
              </Link>
            </li>
          ))}
          <Link href="/signup" className="bg-gray-800 text-gray-100 text-center my-4 rounded-xl px-5 py-3  hover:bg-gray-900 active:bg-gray-600 block md:flex items-center gap-2 capitalize ">get started
          </Link>
        </motion.ul>
      )}
    </div>
  )
}