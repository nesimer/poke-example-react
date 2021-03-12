import React, { useEffect } from 'react'

const DeviceMotion = ({ children }) => {
  const handleEvent = (e) => console.log(e)

  useEffect(() => {
    window.addEventListener('devicemotion', handleEvent)

    return () => window.removeEventListener('devicemotion', handleEvent)
  }, [])

  return <>
    {children}
  </>
}

export default DeviceMotion
