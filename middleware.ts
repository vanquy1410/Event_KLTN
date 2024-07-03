import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing'
]);

export default clerkMiddleware((auth, request) =>{
  if(!isPublicRoute(request)){
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Match all routes except those with a file extension or starting with _next
    '/', // Root route
    '/(api|trpc)(.*)' // API and trpc routes
  ]
};
