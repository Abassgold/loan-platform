'use client'
import { useState } from "react"
import { Check, X } from "lucide-react"
import { useFormik } from "formik"
import { useAppDispatch } from "@/redux/hooks"
import { addUser } from "@/redux/slice/auth"
import * as Yup from 'yup'
import axios, { AxiosError } from "axios"
import { findUser } from "@/redux/type"
import { toast, Toaster } from "sonner"
import { useRouter } from "next/navigation"
interface changePassword {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}
const Security = () => {
    const [show, setShow] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const formik = useFormik<changePassword>({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string(),
            newPassword: Yup.string()
                .test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || ''))
                .min(6, 'Password must not be less than 6 characters')
                .max(12, 'Password must not exceed 12 characters'),

            confirmNewPassword: Yup.string()
                .test('no-spaces', 'Spaces are not allowed', (value) => !/\s/.test(value || ''))
                .min(6, 'Password must not be less than 6 characters')
                .max(12, 'Password must not exceed 12 characters')
                .oneOf([Yup.ref('newPassword')], 'Passwords must match'),

        }),
        onSubmit: async (values: changePassword): Promise<findUser | void> => {
            setLoading(true)
            try {
                const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/updatepassword`, values, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                })
                const res: findUser = data
                if (!res?.success) {
                    toast.warning(res.msg)
                    return res;
                }
                dispatch(addUser(res))
                setShow(false)
                toast.success(res.msg)
                return res;
            } catch (error) {
                const err = error as AxiosError
                toast.error('Failed to fetch')
                console.log(err.message);
                router.push('/signin')
            } finally {
                setLoading(false)
            }
        }
    })
    console.log(formik.values);

    return (
        <section>
            <Toaster
                richColors
                position='top-center'
                duration={2000}
            />
            <section className="min-h-full text-gray-800">
                <div className="py-4">
                    <h1>Your Profile</h1>
                    <p className="text-[14px] mt-2 text-gray-500">Please update your profile settings here</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="border-y border-slate-400 py-4 ">
                        <h1>Current Password</h1>
                        <input
                            required
                            name="oldPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" disabled={!show} placeholder="Enter" className={`focus:border-[blue] outline-none ${show && 'border-gray-400 text-gray-400'} border-[1px] bg-none py-2 px-8 text-gray-400 rounded-xl`} />
                    </div>
                    <div className="border-b border-slate-400 py-4 ">
                        <h1>New Password</h1>
                        <input
                            required
                            name="newPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" disabled={!show} placeholder="Enter" className={`focus:border-[blue] outline-none ${show && 'border-gray-400 text-gray-400'} border-[1px] bg-none py-2 px-8 text-gray-400 rounded-xl`} />
                        {formik.touched.newPassword && formik.errors.newPassword && (
                            <label className='block w-fit mt-2 text-[12px] text-red-700' htmlFor="email">{formik.errors.newPassword}</label>
                        )}
                    </div>
                    <div className="border-b border-slate-400 py-4 ">
                        <h1>Confirm New Password</h1>
                        <input
                            required
                            name='confirmNewPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" disabled={!show} placeholder="Enter" className={`focus:border-[blue] outline-none ${show && 'border-gray-400 text-gray-400'} border-[1px] bg-none py-2 px-8 text-gray-400 rounded-xl`} />
                        {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
                            <label className='block w-fit mt-2 text-[12px] text-red-700' htmlFor="email">{formik.errors.confirmNewPassword}</label>
                        )}
                    </div>
                    <div className="text-center p-4 font-[600]">
                        {!show && (
                            <button type="button" className="p-3 border border-[#DADBDD] rounded-2xl" onClick={() => setShow(true)}>Edit</button>
                        )}
                        {show && (
                            <div className="flex justify-center items-center gap-2">
                                <button type="button" className="p-3 flex items-center gap-1  border border-[#DADBDD] rounded-2xl" onClick={() => setShow(false)}>Cancel <X size={16} /></button>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`p-3 flex items-center gap-1 border bg-gray-800 text-white border-[#DADBDD] rounded-2xl transition-opacity duration-300
    ${loading ? "opacity-50 cursor-not-allowed" : ""}
  `}
                                >
                                    {loading ? "Saving..." : <>Save <Check size={16} /></>}
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Security;