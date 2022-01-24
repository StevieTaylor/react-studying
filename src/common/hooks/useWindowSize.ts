/*
 * @Author: Stevie
 * @Date: 2021-11-15 14:40:45
 * @LastEditTime: 2022-01-24 17:18:29
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'

export interface WindowSize {
  width: number | undefined
  height: number | undefined
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    // handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
