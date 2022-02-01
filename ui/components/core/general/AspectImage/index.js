import Image from 'next/image'
import { AspectRatio } from '@theme-ui/components'

function AspectImage({
    alt = '',
    ratio = 1,
    objectFit = 'cover',
    objectPosition = 'center',
    className,
    imgStyle,
    ...rest
}) {
    // doesn't support container sx yet
    // imgStyle is passed to the inner sx instead
    // see https://github.com/system-ui/theme-ui/issues/781 & /706
    return (
        <AspectRatio ratio={ratio} sx={imgStyle}>
            <Image alt={alt} objectFit={objectFit} objectPosition={objectPosition} {...rest} layout="fill" />
        </AspectRatio>
    )
}

export default AspectImage
