'use client'
import Link from 'next/link'
import './home.css'
import { slides } from './contents'
import { useEffect, useState } from 'react'
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
    }, [])
    return (
        <>
            <section className="parent py-8 md:py-0">
                <div>
                    <div>
                        <h1 className=' text-[3rem] md:text-[3rem]  lg:text-[5rem] font-extrabold text-white'>
                            {slides.at(currentIndex)?.header}
                        </h1>
                        <p className='text-[1.4rem] md:text-[2rem] font-[700] text-white'>{slides[currentIndex].paragraph} <span className='text-[#ca2f18]'>{slides[currentIndex].span}</span></p>
                        <div className='max-w-[25rem] text-white'>
                            <p className='text-[11px] md:text-[1rem]'>{slides[currentIndex].lorems}</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row  items-start gap-4 mt-4 md:mt-[2rem]'>
                    <Link href='' className='bg-[#ca2f18] hover:bg-[white] text-white hover:text-[black] duration-500 font-[600] py-4 px-8 text-[1.2rem]'>
                        <div>Get Money</div>
                    </Link>
                    <Link href='' className='bg-[#d2be6e] font-[600]  py-4 px-8 text-[1.2rem] duration-500 hover:bg-[white]'>
                        <div>Invest</div>
                    </Link>
                </div>
            </section>
            <section className='bg-[#ffff]'>
                <div className=' grid md:grid-cols-3 lg:grid-cols-4 gap-3 p-4'>
                    <div className='bg-[black] h-[20rem]'></div>
                    <div className='bg-[black] h-[20rem]'></div>
                    <div className='bg-[black] h-[20rem]'></div>
                    <div className='bg-[black] h-[20rem]'></div>
                </div>

                <div className='flex'>
                    <div>
                        <p>Hundreds of customers trust our company, <span>who received money </span>for their needs</p>
                        {/* line */}
                        <div></div>
                        {/* line */}
                        <p>Pellentesque congue <span>quis massa sagittis posuere. Praesent placerat cursus lacus, sed suscipit odio dapibus vel. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</span> Maecenas ultrices <span>nulla vehicula felis, eu cursus sem tellus eget elit.</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home