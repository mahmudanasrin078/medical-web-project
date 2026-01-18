"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { isAuthenticated } from '@/utils/auth';

export default function NavbarWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    const checkAuthStatus = () => {
      setIsLoggedIn(isAuthenticated());
      setLoading(false);
    };

    checkAuthStatus();

    // Listen for storage events to update auth status across tabs
    const handleStorageChange = () => {
      setIsLoggedIn(isAuthenticated());
    };

    // Listen for custom auth change events (for same-tab updates)
    const handleAuthChange = () => {
      setIsLoggedIn(isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('auth-change', handleAuthChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

  if (loading) {
    return null; // Or a loading spinner
  }

  return <Navbar isLoggedIn={isLoggedIn} />;
}