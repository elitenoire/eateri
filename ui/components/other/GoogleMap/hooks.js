import React from 'react'
import { createNanoEvents } from 'nanoevents'

const cachedStates = new Map()
const cachedElements = new Map()

export const useScript = src => {
    const [state, setState] = React.useState('loading')

    React.useEffect(() => {
        let mounted = true

        const handleLoad = () => {
            cachedStates.set(src, 'done')
            if (mounted) {
                setState('done')
            }
        }

        const handleError = () => {
            cachedStates.set(src, 'failed')
            if (mounted) {
                setState('failed')
            }
        }

        const cachedState = cachedStates.get(src)

        if (cachedState == null) {
            const newElement = document.createElement('script')
            newElement.async = true
            newElement.defer = true
            newElement.setAttribute('importance', 'low')
            newElement.src = src
            newElement.addEventListener('load', handleLoad)
            newElement.addEventListener('error', handleError)
            cachedStates.set(src, 'loading')
            cachedElements.set(src, newElement)
            // inject to start loading
            if (document.body) {
                document.body.appendChild(newElement)
            }
        }

        if (cachedState === 'loading') {
            const element = cachedElements.get(src)
            if (element) {
                element.addEventListener('load', handleLoad)
                element.addEventListener('error', handleError)
                return () => {
                    element.removeEventListener('load', handleLoad)
                    element.removeEventListener('error', handleError)
                }
            }
        }

        if (cachedState === 'done') {
            setState('done')
        }

        if (cachedState === 'failed') {
            setState('failed')
        }

        return () => {
            mounted = false
        }
    }, [src])

    return state
}

const map_ = {
    emitter: createNanoEvents(),
    api: null,
    error: null,
}

if (typeof window !== 'undefined') {
    const head = document.getElementsByTagName('head')[0]

    const { insertBefore } = head

    // Prevent google map load roboto font
    // $FlowFixMe
    head.insertBefore = function (newElement, referenceElement) {
        if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {
            return
        }
        insertBefore.call(head, newElement, referenceElement)
    }

    window.gm_authFailure = () => {
        map_.error = new Error('Gmap encountered auth error. See console for more details.')
        map_.api = null
        map_.emitter.emit('change')
    }
    window.rgm_mapLoaded = () => {
        if (map_.error == null) {
            map_.api = window.google.maps
        }

        map_.emitter.emit('change')
    }
}

let alertGuard_ = true

export const getMapApiUrl = ({ apiKey }) => {
    if (apiKey == null) {
        throw new Error('process.env.NEXT_PUBLIC_GMAPS_APKEY is not provided')
    }
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=rgm_mapLoaded`
    return url
}

export const useGoogleApiLoader = options => {
    const [api, setApi] = React.useState(map_.api)
    const url = getMapApiUrl(options)
    const state = useScript(url)

    React.useEffect(() => {
        if (api == null && map_.api != null) {
            setApi(map_.api)
        }

        if (state === 'failed') {
            if (process.env.NODE_ENV !== 'production') {
                if (alertGuard_) {
                    alert('unable to load script')
                    alertGuard_ = false
                }
            }
        }

        return map_.emitter.on('change', () => {
            setApi(map_.api)

            if (process.env.NODE_ENV !== 'production' && map_.error != null) {
                // In real app its on you how to process this error
                // usually it means that no quota left or your devops is idiot or any other issue
                // report this somehow if needed.
                if (alertGuard_) {
                    alert(map_.error.message)
                    alertGuard_ = false
                }
            }
        })
    }, [api, state])

    return api
}
