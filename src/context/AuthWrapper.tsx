"use client";
import React from 'react'
import { AuthProvider } from './AuthContext'

const AuthWrapper = ({children}:{children:React.ReactNode}) => {
  return (
     <AuthProvider>
        {children}
     </AuthProvider>
      
    
  )
}

export default AuthWrapper
