'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addUser } from "@/redux/slice/auth"
import { findUser } from "@/redux/type"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const UserDetail = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const name = useAppSelector(state => state.auth.user)
    useEffect(() => {
        const fetchDetails = async (): Promise<findUser | void> => {
            if (!name.success) {
                try {
                    const { data } = await axios.get<findUser>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/authentication`,
                        {
                            withCredentials: true
                        }
                    )
                    const res: findUser = data
                    if (!res?.success) {
                        router.push('/signin')
                        return res
                    }
                    dispatch(addUser(res))
                    return res;
                } catch (error) {
                    const err = error as AxiosError;
                    if(err?.response?.status === 400){
                        router.push('/signin')
                    }else{
                        console.log(err.message)
                    }
                }
              
            }

        }
        fetchDetails()
    })
    return (
        <span>{name.user?.name}</span>
    )
}

export default UserDetail