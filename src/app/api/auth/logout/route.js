import { NextResponse } from 'next/server';

// Handle GET requests (for direct navigation)
export async function GET(request) {
  // Clear the mock session
  // In a real app, you'd clear cookies or tokens here
  
  const response = NextResponse.redirect(new URL('/login', request.url));
  response.cookies.delete('session'); // Remove session cookie if exists
  
  return response;
}

// Handle POST requests (for form submissions)
export async function POST(request) {
  // Clear the mock session
  // In a real app, you'd clear cookies or tokens here
  
  const response = NextResponse.redirect(new URL('/login', request.url));
  response.cookies.delete('session'); // Remove session cookie if exists
  
  return response;
}