import { NextResponse } from 'next/server';

export const isAuthenticated = async (token: string, reqUrl: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/authentication`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        return NextResponse.redirect(new URL('/signin', reqUrl));
    }

    return NextResponse.next();
};
