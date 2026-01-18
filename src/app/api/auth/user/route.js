import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Check if session cookie exists
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    
    // In a real app, you would verify the session token here
    // For this mock, we'll just return a mock user
    
    return NextResponse.json({
      authenticated: true,
      user: {
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'admin'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { authenticated: false, error: 'An error occurred' },
      { status: 500 }
    );
  }
}