// Utility functions for authentication

// Check if user is authenticated
export function isAuthenticated() {
  if (typeof window !== 'undefined') {
    // Client-side check
    const user = localStorage.getItem('user');
    return !!user;
  }
  return false; // Server-side always returns false for now
}

// Get user data
export function getUser() {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
}

// Mock login function
export async function mockLogin(email, password) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock validation
  if (email === 'admin@example.com' && password === 'password123') {
    const user = { email, name: 'Admin User', role: 'admin' };
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    return { success: true, user };
  } else {
    return { success: false, error: 'Invalid credentials' };
  }
}

// Mock logout function
export async function mockLogout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
  return { success: true };
}