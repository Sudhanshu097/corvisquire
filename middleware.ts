import { NextResponse } from 'next/server';

export function middleware(request: Request) {
    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    if (request.method === 'OPTIONS') {
        return new NextResponse(null, { status: 200, headers: response.headers });
    }

    return response;
}

export const config = {
    matcher: ['/api/:path*'],
};
