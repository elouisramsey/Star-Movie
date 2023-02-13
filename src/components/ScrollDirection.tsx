// import { useState } from 'react'

// export enum ScrollDirection {
//   up = 'up',
//   down = 'down'
// }

// export const useScrollDirection = () => {
//   const [scrollDir, setScrollDir] = useState(ScrollDirection.up)
//   const [scrollY, setScrollY] = useState(0)

//   const onScroll = ({
//     nativeEvent: {
//       contentOffset: { y }
//     }
//   }: {
//     nativeEvent: {
//       contentOffset: { y: number }
//     }
//   }) => {
//     const threshold = 100
//     const currentScrollYPosition = y
//     const previousScrollYPosition = scrollY

//     const scrolledMoreThanThreshold =
//       Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold

//     const isScrollingUp =
//       currentScrollYPosition > previousScrollYPosition &&
//       !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
//       !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

//     if (scrolledMoreThanThreshold) {
//       const newScrollDirection = isScrollingUp
//         ? ScrollDirection.down
//         : ScrollDirection.up
//       setScrollDir(newScrollDirection)
//     }

//     setScrollY(y)
//   }

//   return [scrollDir, onScroll] as const
// }

import { useState } from 'react'

export enum ScrollDirection {
  up = 'up',
  down = 'down'
}

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up)
  const [scrollY, setScrollY] = useState(0)

  const onScroll = ({
    nativeEvent: {
      contentOffset: { y }
    }
  }: {
    nativeEvent: {
      contentOffset: { y: number }
    }
  }) => {
    const threshold = 15
    const currentScrollYPosition = y
    const previousScrollYPosition = scrollY

    const scrolledMoreThanThreshold =
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold
    // console.log(Math.abs(currentScrollYPosition - previousScrollYPosition))
    const isScrollingDown = currentScrollYPosition > previousScrollYPosition

    if (scrolledMoreThanThreshold) {
      const newScrollDirection = isScrollingDown
        ? ScrollDirection.down
        : ScrollDirection.up
      setScrollDir(newScrollDirection)
    }

    setScrollY(y)
  }

  return [scrollDir, onScroll] as const
}
