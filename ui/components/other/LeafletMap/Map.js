import { memo } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Icon } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip, CircleMarker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styles from './styles'

const position = {
    lat: 9.079284,
    lng: 7.477093,
}

const zoomLevels = {
    zoom: 16,
    minZoom: 15,
    maxZoom: 18,
}

const other = {
    scrollWheelZoom: false,
}

const markerLogo = new Icon({
    iconUrl: '/inlineSvg/logo.svg',
    iconSize: [20, 20],
})

const onMapClick = () => {
    return {
        click: () => {
            window.open('https://goo.gl/maps/7kiKsPdS4k2NThVB6', '_blank')
        },
    }
}

function LeafletMap() {
    const {
        theme: { colors },
    } = useThemeUI()

    const token = process.env.NEXT_PUBLIC_MAPBOX_APKEY

    return (
        <div sx={styles.wrapper}>
            <MapContainer center={position} {...zoomLevels} {...other}>
                {!token && (
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                )}
                {token && (
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/elitenoire/ckgetwbhm07as19lkdh9bdncw/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                    />
                )}
                <Marker position={position} icon={markerLogo} eventHandlers={onMapClick()}>
                    <Tooltip>Eateri Restaurant 👩‍🍳🥘</Tooltip>
                </Marker>
                <CircleMarker
                    center={position}
                    radius={15}
                    fillColor={colors.highlight.base}
                    fillOpacity={0.5}
                    color={colors.primary.base}
                />
            </MapContainer>
        </div>
    )
}

const MemoizedMap = memo(LeafletMap)

export default MemoizedMap
