import { alpha } from '@theme-ui/color'

const styles = {
    radialCover: {
        position: 'relative',
        mt: '-9em', // should match pb of section above

        bg: 'background',
        backgroundImage: t =>
            `radial-gradient(circle at center center, ${alpha('secondary.pale', 0.5)(t)}, ${alpha(
                'background',
                0.5
            )(t)}), repeating-radial-gradient(circle at center center, ${alpha('secondary.pale', 0.5)(t)}, ${alpha(
                'secondary.pale',
                0.5
            )(t)}, 100px, transparent 200px, transparent 100px)`,
        backgroundBlendMode: 'multiply',
    },
}

export default styles
