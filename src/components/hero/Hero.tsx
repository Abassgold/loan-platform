import './Hero.css'
import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return (
<>
<section className="relative mt-4 flex justify-between h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
<div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
        Start managing your finances the smart way.
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
        Take control of your finances and start spending smarter with tailored loan and investment solutions designed to help you grow, save, and achieve your goals effortlessly.
        </p>
        <div className='flex justify-center md:justify-start gap-2 my-4 items-center '>
        <Link href='' className="button">Invest</Link>
        <Link href='/dashboard' className='button1'>Get Loan</Link>
        </div>
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <Image
          className="right-0  m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src='https://res.cloudinary.com/abasskola/image/upload/v1739352804/app-mobile-1_xwogcb.png'
          alt="CrediGrow app frame"
          width={800}
          height={100}
        />
        <Image
        width={400}
        height={500}
          className="hidden rounded-2xl xl:flex"
          src='https://res.cloudinary.com/abasskola/image/upload/v1739353260/hero_juvolz.png'
          alt="A woman happily using CrediGrow"
        />
      </div>
</section>
</>    
  )
}

export default Hero
