import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");

  if (host === "inandoutsmogplacentia.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.inandoutsmogplacentia.com";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
