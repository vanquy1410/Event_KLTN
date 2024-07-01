import { clerkMiddleware } from "@clerk/nextjs/server";

// Assuming clerkMiddleware does not accept publicRoutes and ignoredRoutes in its options,
// and you need to configure route handling differently according to Clerk documentation.
export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};