import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Extract country from Vercel's edge headers (defaults to IN for local dev)
  const country = request.headers.get('x-vercel-ip-country') || 'IN';
  
  // Define NRI target countries (Gulf, US, UK, Singapore, etc.)
  const nriCountries = ['AE', 'US', 'GB', 'SG', 'QA', 'SA', 'AU'];
  const isNRI = nriCountries.includes(country);
  
  const response = NextResponse.next();
  
  // Inject a secure, HTTP-only cookie that the frontend or API can read
  // to dynamically alter currency, messaging, or ROI graphs.
  response.cookies.set({
    name: 'user-geo-segment',
    value: isNRI ? 'nri' : 'local',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return response;
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
