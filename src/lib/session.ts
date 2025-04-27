import 'server-only'
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
export const isAuthenticated = async (token: string, reqUrl: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/authentication`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    // const data = await res.json()

    if (!res.ok) {
        return NextResponse.redirect(new URL('/signin', reqUrl));
    }

    return NextResponse.next();

};
// export const isAauthorized = async () => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/loans/dashboard`, {
//             method: 'GET',
//             headers: {
//                 // Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }
export const deleteCookie = async () => {
    (await cookies()).delete('authToken')
}