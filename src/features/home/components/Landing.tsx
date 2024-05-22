import { useEffect, useState, type FC } from 'react'
import { Avatar } from 'flowbite-react'

import bgLines from '../../../assets/images/bg-lines.png'
import { AvatarThemeConstant } from '../home.constants'
import { LightningIcon } from '../../../shared/icons/LightningIcon'
import { useAppSelector } from '../../../store'
import type { ILeader } from '../entity/Leader'

/**
 * The landing component of the application
 *
 * @returns The JSX.
 */
export const Landing: FC = () => {
    const [topThreeLeaders, setTopThreeLeaders] = useState<ILeader[]>()

    const data = useAppSelector((store) => store.leaders)

    const initialData = () => {
        const leaders = data?.slice(0, 3)

        setTopThreeLeaders(leaders)
    }

    useEffect(() => {
        initialData()
    }, [data])

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
                    {topThreeLeaders?.map((leader, index) => {
                        const targetPercentage = leader.target_percentage
                        let percentageGradient: string = `${targetPercentage} - CHECK DATABASE`
                        if (targetPercentage < 30) {
                            percentageGradient = 'from-red-700 to-yellow-700'
                        } else if (targetPercentage < 60) {
                            percentageGradient = 'from-red-700 via-orange-400 to-yellow-700'
                        } else if (targetPercentage < 100) {
                            percentageGradient = 'from-red-700 via-orange-400 to-green-700'
                        }

                        return (
                            <div
                                className={`mr-2 flex flex-col items-center justify-center md:mr-5 ${index !== 2 ? 'lg:mr-10' : ''}`}
                                key={leader.uuid}
                            >
                                <Avatar
                                    img={leader.avatar}
                                    rounded
                                    bordered
                                    size='lg'
                                    theme={AvatarThemeConstant}
                                    color='yellow'
                                    className='mb-8'
                                />
                                <div className='mb-1 h-3.5 w-16 rounded-3xl bg-black' />
                                <div className='mb-4 flex flex-col justify-center rounded-2xl bg-black p-4 py-8'>
                                    <div
                                        // eslint-disable-next-line tailwindcss/no-custom-classname
                                        className={`lightning bg-gradient-to-t ${percentageGradient} delay-150 duration-200`}
                                    />
                                </div>
                                <h4 className='text-center font-semi-bold text-lg'>
                                    {leader.name}
                                </h4>
                            </div>
                        )
                    })}
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
