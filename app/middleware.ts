import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed if the token exists
  return NextResponse.next();
}

// Apply middleware to protected routes
export const config = {
  matcher: [
    "/employees/:path*",
    "/annual-physical-examination/:path*",
    "/influenza-vaccine/:path*",
    "/medicines/:path*",
    "/vaccines/:path*",
    "/app/page.tsx",
  ],
};
