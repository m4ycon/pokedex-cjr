import { useEffect, useRef } from "react"


export const InfiniteScroll = ({ loadMore }) => {
  const divRef = useRef()

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        loadMore()
      }

    }, options)
    observer.observe(divRef.current)

    return () => observer.disconnect()

  }, [loadMore])

  return <div ref={divRef} />
}

export default InfiniteScroll