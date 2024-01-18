import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {useAuthStore} from "@/store/Auth.store";
import {Is_Logged_In, OLD_LIT_U} from "@/config";

// const protectedRoutes = ["/dashboard"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log('cookies', request.cookies)
    // const isAuthenticated = request.cookies.get(OLD_LIT_U);
    const isAuthenticated = request.cookies.get(OLD_LIT_U) ? !!JSON.parse(request.cookies.get(OLD_LIT_U)?.value as string) : false;
    const isLoggedIn = request.cookies.get(Is_Logged_In) ? JSON.parse(request.cookies.get(Is_Logged_In)?.value as string) : false;

    console.log('isAuthenticated', isAuthenticated)
    console.log('isLoggedIn', isLoggedIn)

        if (!isAuthenticated || !isLoggedIn) {
        // const absoluteURL = new URL("/", request.nextUrl.origin);
        // return NextResponse.redirect(absoluteURL.toString());
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard',
}

// export default function middleware(req: NextRequest) {
//
//
//
//     if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//         const absoluteURL = new URL("/", req.nextUrl.origin);
//         return NextResponse.redirect(absoluteURL.toString());
//     }
// }