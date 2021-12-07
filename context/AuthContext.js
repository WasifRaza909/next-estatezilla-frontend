import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  // Register a User
  const register = async (user) => {
    setLoading(true);
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push(`/account/dashboard`);
      setLoading(false);
    } else {
      setError(data.message);
      setError(null);
      setLoading(false);
    }
  };

  // Login User
  const login = async ({ email: identifier, password }) => {
    setLoading(true);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
    setLoading(false);
  };

  // Get Logged In User
  const getLoggedInUser = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  // Logout User
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    const data = await res.json();

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, user, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
