import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("access_token")?.value;
  const isValidToken = accessToken && accessToken.length > 10;

  // Public routes
  const publicRoutes = ["/login", "/register", "/forgot-password"];

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // Not logged in → redirect to login
  if (!isValidToken && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Logged in → prevent login page
  if (isValidToken && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
