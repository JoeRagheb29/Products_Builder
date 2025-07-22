import React from 'react'


interface iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      color: string;
}

function ColorCircle({ color , children, ...rest }: iprop) {
  return (
      <span className={`relative block mx-0.5 rounded-full w-6 h-6 `} style={{ backgroundColor:color}} {...rest}>
        {children}
      </span>
  )
}

export default ColorCircle
