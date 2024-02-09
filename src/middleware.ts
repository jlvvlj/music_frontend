// import { authMiddleware, clerkClient } from "@clerk/nextjs";
// import { NextResponse } from "next/server";
// import { type UserRole } from "@/types";
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//   publicRoutes: [
//     "/login(.*)",
//     "/signup(.*)",
//     "/sso-callback(.*)(.*)",
//     "/signout",
//     "/dashboard(.*)",
//     "/settings",
//     "/artist-settings",
//     "/music(.*)",
//     "/contracts_settings(.*)(.*)",
//   ],

//   async afterAuth(auth, req) {
//     if (auth.isPublicRoute) {
//       //  For public routes, we don't need to do anything
//       return NextResponse.next();
//     }

//     const url = new URL(req.nextUrl.origin);

//     if (!auth.userId) {
//       //  If user tries to access a private route without being authenticated,
//       //  redirect them to the sign in page
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }

//     // Set the user's role to user if it doesn't exist
//     const user = await clerkClient.users.getUser(auth.userId);

//     if (!user) {
//       throw new Error("User not found.");
//     }

//     // If the user doesn't have a role, set it to user
//     if (!user.privateMetadata.role) {
//       await clerkClient.users.updateUserMetadata(auth.userId, {
//         privateMetadata: {
//           role: "user" satisfies UserRole,
//         },
//       });
//     }
//   },
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const authenticated =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("tokens")
      : false;

  const authPaths = ["/login", "/signup"];

  if (authenticated && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // logged out and on a restricted path?
  if (!authenticated && !authPaths.includes(req.nextUrl.pathname)) {
    const redirectUrl = req.nextUrl.clone();

    redirectUrl.pathname = "/login";

    if (req.nextUrl.pathname !== "/") {
      redirectUrl.searchParams.set(
        "redirect",
        req.nextUrl.search
          ? `${req.nextUrl.pathname}${req.nextUrl.search}`
          : req.nextUrl.pathname
      );
    }

    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ["/login(.*)", "/signup(.*)", "/sso-callback(.*)(.*)", "/signout"],
};
