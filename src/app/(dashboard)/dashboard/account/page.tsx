'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addUser } from "@/redux/slice/auth"
import { findUser } from "@/redux/type"
import axios, { AxiosError } from "axios"
import { Check, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast, Toaster } from "sonner"
const Account = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [loading, setloading] = useState(false)
    const [fullName, setFullname] = useState<string>('')
    const name: findUser = useAppSelector(state => state.auth.user)
    useEffect(() => {
        const signinUser = async () => {
            if (!name?.success) {
                try {
                    const { data } = await axios.get(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/authentication`,
                        {
                            headers: { "Content-Type": "application/json" },
                            withCredentials: true,
                        }
                    );
                    const res: findUser = data;
                    if (!res?.success) {
                        router.push("/signin");
                        return;
                    }
                    dispatch(addUser(res));
                } catch (error) {
                    console.log(error);
                }
            }
        };

        signinUser();
    });
    const updateName = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName.trim()) return;

        setloading(true);
        try {
            const { data } = await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/updatename`,
                { fullName },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );

            const res: findUser = data;

            if (res?.success) {
                dispatch(addUser(res));
                setShow(false);
                toast.success(res.msg)
                setFullname("");
                // router.push("/signin");
                console.log("Update successful ✅");
            } else {
                toast.warning(res.msg);
            }
        } catch (err) {
            console.error("Update error ❌");
            const error = err as AxiosError;
            if (error.response?.status === 401) {
                router.push("/signin");
            } else {
                toast.error("Something went wrong. Try again.");
            }
        } finally {
            setloading(false);
        }
    };



    return (
        <section className="min-h-full text-gray-800">
            <Toaster
                richColors
                position='top-right'
                duration={2000}
            />
            <div className="py-4">
                <h1>{fullName}</h1>
                <h1>Your Profile</h1>
                <p className="text-[14px] mt-2 text-gray-500">Please update your profile settings here</p>
            </div>
            <form onSubmit={updateName}>
                <div className="border-y border-slate-400 py-4 ">
                    <h1>Full Name</h1>
                    <input
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                        type="text" required disabled={!show} placeholder={name?.user?.name} className={`capitalize focus:border-[blue] outline-none ${show && 'border-gray-400 text-gray-400'} border-[1px] bg-none py-2 px-8 text-gray-400 rounded-xl`} />
                </div>
                <div className="border-b border-slate-400 py-4 ">
                    <h1>Email Address</h1>
                    <input type="text" disabled value={name?.user?.email} className=" bg-none py-2 px-8 text-gray-400 rounded-xl" />
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
    )
}

export default Account;