import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    const originalPath = url.pathname;
    url.pathname = "/api/md";
    url.searchParams.set("path", originalPath);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:ico|png|jpg|jpeg|webp|svg|gif|css|js|ttf|woff|woff2)).*)",
  ],
};
