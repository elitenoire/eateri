import styles from './styles'

function MapLoading() {
    return (
        <div sx={styles.errorOverlay}>
            <span>🗺 Loading...</span>
            <noscript>Sorry, (╥_╥) maps need js enabled</noscript>
        </div>
    )
}

export default MapLoading
