import React , { memo } from 'react'
import { formInputsList } from '../../data'

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({...rest}) {
  return (
      <input className="border border-gray-300 rounded-md shadow-md focus:ring-1 focus:outline-none focus:border-indigo-500 p-1.5" {...rest}/>
  )
}

export default memo(Input);
