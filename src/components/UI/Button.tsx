import React, { Children } from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  width?: "w-full" | "w-fit"
  color?: string
}

function Button({children, className, color = "text-white", width = "w-full", ...rest}: IProps) {
  return (
    <button className={`${width} p-2 rounded-md ${className} ${color}`}  {...rest}>{children}</button>
  )
}

export default Button;