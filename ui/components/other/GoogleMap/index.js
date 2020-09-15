/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import { Map, Overlay, Marker } from 'rgm'
import { Text } from '~@/typography'
import MapMarker from './MapMarker'
import { useGoogleApiLoader } from './hooks'
import { styles, mapStyles } from './styles'

const MAP_OPTIONS = {
    disableDefaultUI: true,
    styles: mapStyles,
    zoom: 18,
    center: {
        lat: 9.080402,
        lng: 7.485739,
    },
    gestureHandling: 'greedy',
    clickableIcons: false,
}

const GoogleMap = () => {
    const api = useGoogleApiLoader({
        apiKey: process.env.NEXT_PUBLIC_GMAPS_APKEY,
    })

    return (
        <div sx={styles.wrapper}>
            {api && (
                <Map api={api} options={MAP_OPTIONS}>
                    <Overlay>
                        <Marker lat={MAP_OPTIONS.center.lat} lng={MAP_OPTIONS.center.lng}>
                            <MapMarker />
                        </Marker>
                    </Overlay>
                </Map>
            )}
            {!api && (
                <div sx={styles.errorOverlay}>
                    <Text size={1} align="center">
                        Sorry, (╥_╥) <span>google map is unavailable</span>
                    </Text>
                </div>
            )}
        </div>
    )
}

const MemoizedGoogleMap = React.memo(GoogleMap)

export default MemoizedGoogleMap
