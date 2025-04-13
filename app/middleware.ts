import { NextRequest, NextResponse } from 'next/server';

// Your default and supported locales
const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'ro'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect root "/"
  if (pathname === '/') {
    const acceptLang = request.headers.get('accept-language') || '';
    const preferredLang = acceptLang.split(',')[0].toLowerCase();

    // If browser language is Romanian, redirect to /ro
    if (preferredLang.startsWith('ro')) {
      return NextResponse.redirect(new URL('/ro', request.url));
    }

    // Otherwise, redirect to /en
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  // Continue as normal for other paths
  return NextResponse.next();
}
