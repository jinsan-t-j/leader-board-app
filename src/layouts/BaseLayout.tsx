import type { FC, ReactNode } from 'react'

import factoryBackground from '../assets/images/bg-factory.png'

interface IBaseLayout {
    children?: ReactNode
}

/**
 * The base layout for the application.
 *
 * @returns The base JSX layout.
 */
export const BaseLayout: FC<IBaseLayout> = ({ children }) => {
    return (
        <div className='container max-lg:m-auto lg:ml-auto'>
            <main>
                <div className='absolute left-0 top-0 -z-20 bg-[radial-gradient(at_-100%_0%,_#FFDB82_30%,_transparent_55%)] md:h-full md:w-2/4' />
                <div className='absolute left-0 top-0 -z-10 bg-[radial-gradient(at_30%_-66%,_#FFC59A_10%,_transparent_55%)] md:h-full md:w-3/4' />
                <div className='my-4 flex min-h-screen shrink-0 grow-0 flex-col justify-between max-md:items-center lg:flex-row'>
                    {children}
                </div>
                <div className='absolute bottom-0 left-0 -z-50 hidden lg:block'>
                    <img src={factoryBackground} alt='' />
                </div>
            </main>
        </div>
    )
}
