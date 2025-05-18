import { NextResponse, NextRequest } from 'next/server';
import { isAuthenticated } from './lib/auth/session';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;

    if (req.nextUrl.pathname.startsWith('/contact-us')) {
        if (!token) {
            return NextResponse.redirect(new URL('/signin', req.url));
        }
        return await isAuthenticated(token, req.url);
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};
