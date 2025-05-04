import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user', e);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);
  
  // Mock login functionality
  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Demo accounts for testing
        if (email === 'admin@example.com' && password === 'password') {
          const adminUser = {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
            isAdmin: true
          };
          setUser(adminUser);
          localStorage.setItem('user', JSON.stringify(adminUser));
          setIsLoading(false);
          resolve(true);
        } else if (email === 'user@example.com' && password === 'password') {
          const regularUser = {
            id: '2',
            name: 'Regular User',
            email: 'user@example.com',
            isAdmin: false
          };
          setUser(regularUser);
          localStorage.setItem('user', JSON.stringify(regularUser));
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };
  
  // Mock signup functionality
  const signup = async (name, email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create a new user
        const newUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          isAdmin: false
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setIsLoading(false);
        resolve(true);
      }, 1000);
    });
  };
  
  // Logout functionality
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    login,
    signup,
    logout,
    isLoading
  };
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};