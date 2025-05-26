'use client'
import Link from 'next/link'
import './signin.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast, Toaster } from 'sonner'
import { useAppDispatch } from '@/redux/hooks';
import { useState } from 'react';
import Typewriter from '@/lib/typewriter/Typewriter';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios'
import { addUser } from '@/redux/slice/auth';

interface IUser {
    name?: string;
    email: string;
    password: string;
}
interface findUser {
    success: boolean;
    user?: {
        createdAt: string
        email: string
        role: string
        name: string
        updatedAt: string
        _id: string
    };
    msg?: string;
}
const SignIn = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [loader, setLoader] = useState<boolean>(false)
    const [show, setShow] = useState(false)
    const formik = useFormik<IUser>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || '')).required('Please enter your email').lowercase(),
            password: Yup.string().test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || '')).min(6, 'Password must not be less than 6 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your password'),
        }),
        onSubmit: async (values: IUser): Promise<findUser | void> => {
            setLoader(true)
            try {
                const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, values, {
                  }) 
                  const res : findUser = data
                if (res?.success) {
                    toast.success(res.msg)
                    dispatch(addUser(res))
                    router.push('/dashboard');
                    return res;
                }
                toast.error(res.msg)
                return res;
            } catch (error) {
                const err = error as AxiosError
                console.log(err.message);
                
                toast.error('Failed to fetch' )
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
                        <p className="title">SIGN IN</p>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="email"></label>
                            <div className="form_group">
                                <label className="sub_title" htmlFor="email">Email</label>
                                <input placeholder="Enter your email" id="email" className="form_style" type="email" name='email' onChange={formik.handleChange} />
                                {formik.touched.email && formik.errors.email && (
                                    <label className='mt-2 text-[12px] text-red-700' htmlFor="email">{formik.errors.email}</label>
                                )}
                            </div>
                            <div className="form_group relative">
                                <label className="sub_title" htmlFor="password">Password</label>
                                <input placeholder="Enter your password" id="password" className="form_style" type={!show ? 'password' : 'text'} onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' />
                                {formik.touched.password && formik.errors.password && (
                                    <label className='mt-2 text-[12px] text-red-700' htmlFor="password">{formik.errors.password}</label>
                                )}
                                {!show ? <EyeOff className='absolute right-2 top-12 cursor-pointer' onClick={() => setShow(true)} /> : <Eye className='absolute right-2 top-12 cursor-pointer' onClick={() => setShow(false)} />}
                            </div>
                            <div>
                                <button className={`btn`} type='submit' disabled={loader}>{loader ? <Typewriter text="Wait" /> : 'SIGN IN'}</button>
                                <p>Don&apos;t have an Account? <Link className="link" href="/signup">Sign Up Here!</Link></p>
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

export default SignIn;