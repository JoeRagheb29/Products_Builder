import React, { memo , Children } from 'react'
import { motion } from "framer-motion";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  width?: "w-full" | "w-fit"
  color?: string
}

function Button({children, className, color = "text-white", width = "w-full", ...rest}: IProps) {
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className={`p-2 rounded-md cursor-pointer ${width} ${className} ${color}`}  {...(rest as any)}>{children}</motion.button>
  )
}

export default memo(Button);