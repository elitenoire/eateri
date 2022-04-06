import ContentLoader from 'react-content-loader'
import { Container } from '@theme-ui/components'
import styles from './style'

export default function HeroSkeleton({ uniqueKey = 'smph' }) {
    return (
        <Container pt={8} variant="loose" sx={styles.container}>
            <div sx={styles.grid}>
                <div>
                    <ContentLoader uniqueKey={`${uniqueKey}-tle`} width="100%" viewBox="0 0 500 175">
                        <rect x="0" y="0" rx="5" ry="5" width="480" height="120" />
                        <rect x="0" y="165" rx="5" ry="5" width="120" height="10" />
                    </ContentLoader>
                </div>
                <div sx={styles.responsive}>
                    <ContentLoader uniqueKey={`${uniqueKey}-svg`} width="100%" viewBox="0 0 250 315">
                        <rect x="0" y="0" width="250" height="315" />
                    </ContentLoader>
                </div>
                <div>
                    <ContentLoader uniqueKey={`${uniqueKey}-hli`} width="100%" viewBox="0 0 500 180">
                        <rect x="0" y="0" rx="5" ry="5" width="480" height="50" />
                        <rect x="0" y="70" rx="5" ry="5" width="400" height="50" />
                    </ContentLoader>
                    <ContentLoader uniqueKey={`${uniqueKey}-pgh`} width="100%" viewBox="0 0 500 180">
                        <rect x="0" y="0" rx="5" ry="5" width="480" height="25" />
                        <rect x="0" y="35" rx="5" ry="5" width="480" height="25" />
                        <rect x="0" y="70" rx="5" ry="5" width="480" height="25" />
                        <rect x="0" y="105" rx="5" ry="5" width="480" height="25" />
                        <rect x="0" y="140" rx="5" ry="5" width="480" height="25" />
                    </ContentLoader>
                </div>
            </div>
        </Container>
    )
}
