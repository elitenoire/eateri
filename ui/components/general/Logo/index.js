/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import MonoLogo from '~public/inlineSvg/logo.svg'
import styles from './style'

const Logo = ({ color, ...rest }) => <MonoLogo sx={styles[color]} {...rest} />

Logo.defaultProps = {
    color: 'primary',
}

export default Logo
