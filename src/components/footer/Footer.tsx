import Link from "next/link";
import { navLinks } from "../navigation/content";
const Footer = () => {
  const textLinkClasses = "text-[16px] text-gray-300 hover:text-gray-400 active:text-gray-400";

  return (
    <>
      <section className="bg-gray-800 px-4 text-gray-300 py-8">
        <div className="mx-auto max-w-7xl  px-8  lg:px-12">
          <div className="grid justify-center gap-4 items-center md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <h1 className="text-4xl">Logo</h1>
              <p>Start saving the smart way</p>
            </div>
            <ul className="flex justify-center items-center gap-4">
              {navLinks?.map((item, index) => (
                <Link href={item.href} key={index} className={textLinkClasses}>{item.child}</Link>
              ))}
            </ul>
          </div>
          <div>
          </div>
        </div>
        <p className=" mt-[3rem] lg:mt-[8rem] text-center">
        CreditGrow - Your Trusted Partner © 2025
        </p>
      </section>
    </>
  )
}

export default Footer