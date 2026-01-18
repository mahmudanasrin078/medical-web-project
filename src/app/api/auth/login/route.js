import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Mock authentication - hardcoded credentials
    if (email === 'admin@example.com' && password === 'password123') {
      // Create a mock session token
      const token = 'mock-session-token-' + Date.now();
      
      // Set cookie with session token
      const response = NextResponse.json({ 
        success: true, 
        user: { 
          email, 
          name: 'Admin User',
          role: 'admin'
        } 
      });
      
      response.cookies.set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        sameSite: 'strict',
        path: '/',
      });
      
      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}