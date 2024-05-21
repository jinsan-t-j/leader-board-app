import type { FC } from 'react'

interface IBatteryProps {
    value: number
    className?: string
}

/**
 * The battery component.
 *
 * @param param - The battery component param @see IBatteryProps
 * @returns The JSX.
 */
export const Battery: FC<IBatteryProps> = ({ value, className }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <div className='mr-0.5 h-2 w-0.5 rounded-sm bg-yellow-700' />
            <div className='w-8 rounded-sm bg-yellow-700 p-0.5 text-center text-xs'>{value}</div>
        </div>
    )
}
