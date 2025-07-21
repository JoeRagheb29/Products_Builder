import React from 'react'

interface iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      color: string;
}

function ColorCircle({ color , ...rest }: iprop) {
  return (
      <span className={`block mx-0.5 rounded-full w-6 h-6 `} style={{ backgroundColor:color}} {...rest}></span>
  )
}

export default ColorCircle
