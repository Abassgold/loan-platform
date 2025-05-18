import Link from "next/link"

const LoginButton = () => {
  return (
    <Link href='/signin' className=' p-2 md:p-3 rounded-xl border-[2px] text-[14px] md:text-base hover:bg-gray-50 duration-200 font-[400] md:font-[600] block'>Log In</Link>
  )
}

export default LoginButton