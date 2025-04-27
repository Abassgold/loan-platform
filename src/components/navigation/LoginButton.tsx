import Link from "next/link"

const LoginButton = () => {
  return (
    <Link href='/signin' className='p-3 rounded-xl border-[2px] hover:bg-gray-50 duration-200 font-[600] block'>Log In</Link>
  )
}

export default LoginButton