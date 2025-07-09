import React from 'react'

interface Props {
  src: string,
  className?: string,
  alt?: string
}

function Image( {className , src , alt}: Props) {
  
  return (
      <img className={`${className} `} src={src} alt={alt}/>
  )
}

export default Image;
