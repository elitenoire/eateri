/** @jsx jsx */
import { jsx, useThemeUI } from '@theme-ui/core'
import React from 'react'
import { Map, Marker, TileLayer, Popup, CircleMarker } from 'react-leaflet'

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

const LeafletMap = () => {
    const {
        theme: { colors },
    } = useThemeUI()

    const token = process.env.NEXT_PUBLIC_MAPBOX_APKEY

    return (
        <div sx={styles.wrapper}>
            <Map center={position} {...zoomLevels} {...other}>
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
                <Marker position={position}>
                    <Popup>Eateri Restaurant 👩‍🍳🥘</Popup>
                </Marker>
                <CircleMarker
                    center={position}
                    radius={15}
                    fillColor={colors.highlight.base}
                    fillOpacity={0.5}
                    color={colors.primary.base}
                />
            </Map>
        </div>
    )
}

const MemoizedMap = React.memo(LeafletMap)

export default MemoizedMap
