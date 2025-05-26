import { NextResponse, NextRequest } from 'next/server';
import { isAuthenticated } from './lib/auth/session';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;
    if (req.nextUrl.pathname.startsWith('/dashboard') && (!isAuthenticated(token!))){
        return NextResponse.redirect(new URL('/dashboard', req.url));
    } 
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};
