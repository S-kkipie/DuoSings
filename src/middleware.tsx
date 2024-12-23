import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (!token && !isAuthPage) {
    const loginUrl = new URL("/signin", request.url);
    loginUrl.searchParams.set("message", "authentication_required");
    return NextResponse.redirect(new URL(loginUrl, request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/learn", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
