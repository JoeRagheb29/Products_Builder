import React from 'react'

interface Iprops {
  txt: string,
  max?: number
}

function textslicer({txt , max = 50}: Iprops) {
      return (txt.length >= max) ? txt.slice(0, max) + "..." : txt ;
}

export default textslicer;