import React from 'react'

function ErrorMsg({ errorMsg }: { errorMsg: string }) {
  return (
    <span className="block text-red-500 text-sm">{errorMsg}</span>
  )
}

export default ErrorMsg;
