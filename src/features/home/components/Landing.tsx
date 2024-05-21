import type { FC } from 'react'
import { Avatar } from 'flowbite-react'

import manager from '../../../assets/images/manager.webp'
import bgLines from '../../../assets/images/bg-lines.png'
import { AvatarThemeConstant } from '../home.constants'
import { LightningIcon } from '../../../shared/icons/LightningIcon'

/**
 * The landing component of the application
 *
 * @returns The JSX.
 */
export const Landing: FC = () => {
    return (
        <div className='relative flex flex-col justify-center md:w-3/5'>
            <h2 className='-mb-1 font-light text-black sm:-mb-2 sm:text-2xl md:-mb-8 md:text-3xl xl:text-4xl'>
                Use your time wisely
            </h2>
            <h1 className='mb-16 font-light tracking-wide text-black sm:text-4xl md:text-6xl xl:text-7xl'>
                You Are A{' '}
                <span className='font-semi-bold sm:text-6xl md:text-8xl xl:text-9xl'> Star </span>
            </h1>
            <div className='flex justify-start max-md:flex-col'>
                <div className='flex justify-start'>
                    {[0, 1, 2].map((x) => (
                        <div
                            className={`mr-2 flex flex-col items-center justify-center md:mr-5 ${x !== 2 ? 'lg:mr-10' : ''}`}
                            key={x}
                        >
                            <Avatar
                                img={manager}
                                rounded
                                bordered
                                size='lg'
                                theme={AvatarThemeConstant}
                                color='yellow'
                                className='mb-8'
                            />
                            <div className='mb-1 h-3.5 w-16 rounded-3xl bg-black' />
                            <div className='mb-4 flex flex-col justify-center rounded-2xl bg-black p-4 py-8'>
                                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                                <div className='lightning bg-gradient-to-t from-red-700 via-orange-400 to-green-700' />
                            </div>
                            <h4 className='text-center font-semi-bold text-lg'> Jennifer </h4>
                        </div>
                    ))}
                </div>
                <button
                    className='m-auto flex size-16 items-center justify-center self-center rounded-full bg-black max-md:mt-6'
                    onClick={() => location.reload()}
                >
                    <LightningIcon />
                </button>
            </div>
            <div className='-right-36 top-0 -z-10 max-md:hidden md:absolute'>
                <img src={bgLines} alt='The background lines' />
            </div>
        </div>
    )
}
