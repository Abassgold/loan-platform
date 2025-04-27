'use client'
import Link from 'next/link'
import './signup.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast, Toaster } from 'sonner'
import { useState } from 'react'
import Typewriter from '@/lib/typewriter/Typewriter'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation';
interface IUser {
    name: string;
    email: string;
    password: string;
}
interface findUser {
    success: boolean;
    user?: {
        createdAt: string
        email: string
        name: string
        updatedAt: string
        _id: string
    };
    msg?: string;
}
const SignUp = () => {
    const [loader, setLoader] = useState<boolean>(false)
    const [show, setShow] = useState(false)
    const router = useRouter()
    const formik = useFormik<IUser>({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().lowercase().required('Please enter your full name'),
            email: Yup.string().email('Invalid email').test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || '')).required('Please enter your email').lowercase(),
            password: Yup.string().test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || '')).min(6, 'Password must not be less than 6 characters')
                .max(12, 'Password must not exceed 12 characters')
                .required('Please enter your password'),
        }),
        onSubmit: async (values: IUser): Promise<findUser | void> => {
            setLoader(true)
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                    credentials: 'include'
                })
                const data: findUser = await response.json();
                if (data?.success) {
                    router.push('/signin');
                    return;
                }
                toast.error(data?.msg || "An error occurred");
            } catch (error) {
                console.log(error)
                toast.error('Registration failed')
            } finally {
                setLoader(false)
            }
        }
    })
    return (
        <>
            <Toaster
                richColors
                position='top-center'
                duration={2000}
            />
            <section className='absolute z-[200] top-0 flex justify-center items-center h-[100vh] w-full bg-gray-200'>
                <div className="container">
                    <div className="form_area">
                        <p className="title">SIGN UP</p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form_group">
                                <label className="sub_title" htmlFor="name">Name</label>
                                <input required placeholder="Enter your full name" className="form_style" type="text" onChange={formik.handleChange} name='name' onBlur={formik.handleBlur} />
                                {formik.touched.name && formik.errors.name && (
                                    <label className='mt-2 text-[12px] text-red-700' htmlFor="name">{formik.errors.name}</label>
                                )}
                            </div>
                            <label htmlFor="email"></label>
                            <div className="form_group">
                                <label className="sub_title" htmlFor="email">Email</label>
                                <input required placeholder="Enter your email" id="email" className="form_style" type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email && (
                                    <label className='mt-2 text-[12px] text-red-700' htmlFor="email">{formik.errors.email}</label>
                                )}
                            </div>
                            <div className="form_group relative">
                                <label className="sub_title" htmlFor="password">Password</label>
                                <input required placeholder="Enter your password" id="password" className="form_style" type={!show ? 'password' : 'text'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password && (
                                    <label className='mt-2 text-[12px] text-red-700' htmlFor="password">{formik.errors.password}</label>
                                )}
                                {!show ? <EyeOff className='absolute right-2 top-12 cursor-pointer' onClick={() => setShow(true)} /> : <Eye className='absolute right-2 top-12 cursor-pointer' onClick={() => setShow(false)} />}
                            </div>
                            <div>
                                <button className="btn" type='submit' disabled={loader}>
                                    {loader ? <Typewriter text='WAIT' /> : 'SIGN UP'}
                                </button>
                                <p>Have an Account? <Link className="link" href="/signin">Sign In Here!</Link></p>
                                <Link className="link" href="">
                                </Link>
                            </div>
                            <Link className="link" href="">

                            </Link>
                        </form>
                    </div>
                    <Link className="hover:underline underline-offset-2 my-2 text-4 font-[600]" href="/">
                        Home
                    </Link>
                </div>
            </section>
        </>
    )
}

export default SignUp;