import { useLayoutEffect } from 'react'

const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {}

export default useBrowserLayoutEffect
