'use client'
import * as Yup from 'yup';
import { funding, industrySectors } from "./loancontents"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Typewriter from "@/lib/typewriter/Typewriter";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { isValidPhoneNumber } from 'libphonenumber-js';

// interface LoanFormValues {
//     fullName: string;
//     businessName: string;
//     loanAmount: number;
//     fundingReason: string;
//     industry: string;
//     cellPhone: string; 
//     duration: number;
//   }
const Application = () => {
    useEffect(() => {
    }, [])
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: {
            fullName: 'abass',
            businessName: '',
            loanAmount: 0,
            fundingReason: '',
            industry: '',
            cellPhone: '',
            duration: 1,
          },
          validationSchema: Yup.object({
            fullName: Yup.string(),
            businessName: Yup.string(),
            loanAmount: Yup.number().min(5000, 'Amount must be at least $5000'),
            fundingReason: Yup.string(),
            industry: Yup.string(),
            duration: Yup.number().min(1, 'Duration must be at least 1 month').max(120, 'Duration must not pass 120 months'),
            cellPhone: Yup.string()
              .required('Phone number is required')
              .test('is-valid-phone', 'Invalid phone number', (value) =>
                isValidPhoneNumber('+'+value || '')
              ),
          }),
        onSubmit: async (values) => {
            setLoading(true)
            try {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/loans/apply`,
                    values,
                    {
                        withCredentials: true,
                    }
                );

                if (!data?.success) {
                    console.log(data.msg);
                    return toast.error(data.msg)
                }
                toast.success(data.msg);
                setTimeout(() => {
                    router.push('/dashboard');
                }, 3000);

            } catch (error) {
                console.error("Error applying for loan:", error);
                return toast.error('Something went wrong')
            } finally {
                setLoading(false)
            }
        }
    })
    console.log(formik.values);

    return (
        <>
            <Toaster
                richColors
                position='top-center'
                duration={2000}
            />
            <div>
                <p className="px-2 mt-4 text-center text-[16px] md:text-[1.8rem]">Fill Out The Form Below | Submit | Get Approved Instantly</p>
            </div>
            <section className="">
                <form
                    onSubmit={formik.handleSubmit}
                    className="p-[1rem] md:p-[2rem] shadow-m bg-white border border-[#dadbdd] mt-[1rem] mb-[2rem]">
                    <div className="flex flex-col md:flex-row  justify-between items-center gap-2 md:gap-5  mb-2">
                        <div className="md:flex-1 w-full">
                            <label htmlFor="" className="text-[#383839]">Full Name</label>
                            <input disabled value='abasss' name="fullName" required type="text" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} />
                        </div>
                        <div className="md:flex-1 w-full">
                            <label htmlFor="" className="text-[#383839]">Cell Phone?</label>
                            <PhoneInput
                                country={'us'}
                                onBlur={formik.handleBlur}
                                onChange={(value) => formik.setFieldValue('cellPhone', value)}
                                enableSearch={true}
                                inputProps={{
                                    name: 'cellPhone',
                                    required: true,
                                  }}
                                
                                inputStyle={{
                                    width: '100%',
                                    paddingBlock: '10px',
                                }}
                                buttonStyle={{
                                    borderRight: '1px solid #ccc',
                                }}
                            />

                            {formik.touched.cellPhone && formik.errors.cellPhone && (
                                <label htmlFor="loanAmount" className="mt-1 text-red-600 text-[12px] md:text-[15px]">{formik.errors.cellPhone}</label>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-between items-center gap-2 md:gap-5  mb-2">
                        <div className="md:flex-1 w-full">
                            <label htmlFor="" className="text-[#383839]">Loan Duration (Months)</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="number"
                                min="1"
                                max="120"
                                required
                                name="duration"
                                placeholder="Choose between 1 - 120 months"
                                className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700"
                            />
                            {formik.touched.duration && formik.errors.duration && (
                                <label htmlFor="loanAmount" className="mt-1 text-red-600 text-[12px] md:text-[15px]">{formik.errors.duration}</label>
                            )}
                        </div>
                        <div className="md:flex-1 w-full">
                            <label htmlFor="" className="text-[#383839]">Business Name</label>
                            <input name="businessName" required type="text" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} />
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="" className="text-[#383839]">How Much Do You Need in Dollars?</label>
                        <input name="loanAmount" required type="number" placeholder="Enter amount (Min: $5000)" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.loanAmount && formik.errors.loanAmount && (
                            <label htmlFor="loanAmount" className="mt-1 text-red-600 text-[12px] md:text-[15px]">Amount must be at least $5000</label>
                        )}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="text-[#383839]">Reason For Funding?</label>
                        <select required name="fundingReason" id="" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange}>
                            <option value=""></option>
                            {industrySectors && industrySectors.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="text-[#383839]">Industry?</label>
                        <select required name="industry" id="" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange}>
                            <option></option>
                            {funding && funding.map((item, index) => (
                                <option className="hover:bg-gray-800" value={item} key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className=" text-center text-[20px] text-white mt-2">
                        <button className=" p-3 bg-gray-800 rounded-[5px] hover:bg-gray-600" type="submit" disabled={loading}>{loading ? <Typewriter text="Wait" /> : 'Submit'}</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Application