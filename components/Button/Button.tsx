import React, { FunctionComponent } from 'react'

interface Props {
    className?: string
    variant?: 'primary' | 'secondary'
    onClick: () => void
}

function getVariantStyle(variant: 'primary' | 'secondary') {
    if (variant === 'primary') {
        return 'bg-blue-500 text-white'
    } else {
        return 'bg-gray-500 text-white'
    }
}
export const Button: FunctionComponent<Props> = ({
    onClick,
    variant = 'primary',
    className,
    children,
}) => {
    const variantStyle = getVariantStyle(variant)
    return (
        <div
            className={`cursor-pointer px-6 py-2 rounded text-center ${variantStyle} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
