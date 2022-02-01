import { useState, useCallback } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { getColor } from '@theme-ui/color'

import styles from './style'

// https://github.com/narendra-sabale/star-rating-svg-react-hooks/tree/master/src

export default function Star({
    fill,
    dim,
    id,
    setSelectedRating,
    starFillColor,
    starEmptyColor,
    starBorderColor,
    starGradientStartColor,
    starGradientStopColor,
    setNoOfHoveredStars,
    outline,
    isReadOnly,
    starSpacing,
    width,
    height,
    size,
    ...rest
}) {
    const { theme } = useThemeUI()

    const [isMouseDown, setIsMouseDown] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(() => {
        if (isReadOnly) return
        setIsHover(true)
        setNoOfHoveredStars(id)
    }, [id, setNoOfHoveredStars, isReadOnly])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
        setNoOfHoveredStars(null)
    }, [setNoOfHoveredStars])

    const onMouseDown = useCallback(() => {
        if (isReadOnly) return
        setIsMouseDown(true)
    }, [isReadOnly])

    const onMouseUp = useCallback(() => {
        setIsMouseDown(false)
    }, [])

    const onClick = useCallback(() => {
        if (isReadOnly) return
        setSelectedRating(id)
    }, [id, setSelectedRating, isReadOnly])

    const isGradient = !!(starGradientStartColor && starGradientStopColor)
    const starColor = isGradient ? 'url(#star-rating-gradient)' : starFillColor || 'none'
    const starStrokeColor = isGradient ? 'url(#star-rating-gradient)' : starBorderColor || starFillColor || 'none'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width={size || width || '64'}
            height={size || height || '64'}
            transform={`scale(${isMouseDown ? 0.98 : isHover ? 1.1 : 1})`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
            sx={styles.star({ isReadOnly, starSpacing })}
            {...rest}
        >
            {isGradient && (
                <defs>
                    <linearGradient id="star-rating-gradient" x1="0%" x2="100%" y1="50%" y2="50%">
                        <stop offset="0%" stopColor={getColor(theme, starGradientStartColor || 'none')} />
                        <stop offset="100%" stopColor={getColor(theme, starGradientStopColor || 'none')} />
                    </linearGradient>
                </defs>
            )}
            <path
                opacity={dim ? 0.5 : 1}
                fill={getColor(theme, fill ? starColor : starEmptyColor || 'none')}
                fillRule="evenodd"
                stroke={getColor(theme, outline || fill ? starStrokeColor : starEmptyColor || 'none')}
                strokeWidth="0.64"
                d="M14.1891 5.51719L10.2219 4.94063L8.44847 1.34532C8.40003 1.24688 8.32034 1.16719 8.2219 1.11875C7.97503 0.996878 7.67503 1.09844 7.55159 1.34532L5.77815 4.94063L1.81097 5.51719C1.70159 5.53282 1.60159 5.58438 1.52503 5.6625C1.43247 5.75764 1.38146 5.88563 1.38322 6.01835C1.38498 6.15107 1.43936 6.27767 1.5344 6.37032L4.40472 9.16875L3.72659 13.1203C3.71069 13.2122 3.72086 13.3068 3.75595 13.3932C3.79105 13.4796 3.84966 13.5545 3.92514 13.6093C4.00062 13.6642 4.08995 13.6967 4.183 13.7034C4.27605 13.71 4.3691 13.6904 4.45159 13.6469L8.00003 11.7813L11.5485 13.6469C11.6453 13.6984 11.7578 13.7156 11.8657 13.6969C12.1375 13.65 12.3203 13.3922 12.2735 13.1203L11.5953 9.16875L14.4657 6.37032C14.5438 6.29375 14.5953 6.19375 14.611 6.08438C14.6532 5.81094 14.4625 5.55782 14.1891 5.51719V5.51719Z"
            />
        </svg>
    )
}
