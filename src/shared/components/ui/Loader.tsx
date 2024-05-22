import { Spinner } from 'flowbite-react'
import { useEffect, useState, type FC } from 'react'

interface ILoaderProps {
    isLoading: boolean
}

/**
 * The loader component.
 *
 * @returns The JSX.
 */
export const Loader: FC<ILoaderProps> = ({ isLoading }) => {
    const [isHidden, setIsHidden] = useState<boolean>(false)

    const spinnerTheme = {
        color: {
            yellow: 'fill-yellow-700',
        },
    }

    useEffect(() => {
        setTimeout(() => {
            setIsHidden(true)
        }, 2000)
    }, [])

    return (
        <div
            className={`${isLoading ? 'opacity-100' : 'opacity-0'} ${isHidden ? 'hidden' : 'block'} absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-gray-100 duration-700`}
        >
            <Spinner
                aria-label='Default status example'
                size='xl'
                color='yellow'
                theme={spinnerTheme}
            />
        </div>
    )
}
