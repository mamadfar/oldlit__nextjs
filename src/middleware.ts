import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {OLD_LIT_AT} from "@/config";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get(OLD_LIT_AT) ? !!JSON.parse(request.cookies.get(OLD_LIT_AT)?.value as string) : false;

    if (request.nextUrl.pathname === '/dashboard' && !isAuthenticated) {
        request.cookies.clear()
        return NextResponse.redirect(new URL('/', request.url))
    }
    // if (!request.cookies.has(OLD_LIT_AT)) {
    //     request.cookies.clear()
    // }

}