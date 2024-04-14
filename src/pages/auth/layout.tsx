import React from 'react'
import { Children } from "react"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] w-[100vw] h-[100vh]">
        {children}
    </div>
  )
}

export default AuthLayout;