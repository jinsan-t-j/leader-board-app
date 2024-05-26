import { useEffect, useState, type FC } from 'react'
import { Avatar } from 'flowbite-react'
import { chain } from 'lodash'

import bgLines from '../../../assets/images/bg-lines.png'
import { AvatarThemeConstant } from '../home.constants'
import { LightningIcon } from '../../../shared/icons/LightningIcon'
import { useAppSelector } from '../../../store'
import type { ILeader } from '../entity/Leader'

interface ITeam {
    name: string
    leaders: ILeader[]
}

/**
 * The landing component of the application
 *
 * @returns The JSX.
 */
export const Landing: FC = () => {
    const [teams, setTeams] = useState<ITeam[]>()

    const data = useAppSelector((store) => store.leaders)

    const initialData = () => {
        const teams = chain(data)
            ?.groupBy('team_name')
            .map((value, key) => ({ name: key, leaders: value }))
            .value()

        setTeams(teams)
    }

    useEffect(() => {
        initialData()
    }, [data])

    return (
        <div className='relative flex flex-col justify-center md:w-3/5'>
            <h2 className='-mb-1 font-light text-2xl text-black max-lg:mt-8 sm:-mb-2 md:-mb-8 md:text-3xl xl:text-4xl'>
                Use your time wisely
            </h2>
            <h1 className='mb-16 font-light text-4xl tracking-wide text-black md:text-6xl xl:text-7xl'>
                You Are A
                <span className='font-semi-bold text-6xl md:text-8xl xl:text-9xl'> Star </span>
            </h1>
            <div className='flex justify-start max-md:flex-col'>
                <div className='max-h-[calc(100vh-220px)] overflow-x-hidden overflow-y-scroll'>
                    {teams?.map((team) => (
                        <>
                            <h3
                                className='mb-8 text-3xl font-medium text-black underline'
                                key={team.name}
                            >
                                {team.name}
                            </h3>
                            <div className='mb-4 grid grid-cols-3'>
                                {team?.leaders?.map((leader, index) => {
                                    const targetPercentage = leader.target_percentage
                                    let percentageGradient: string = `${targetPercentage} - CHECK DATABASE`
                                    if (targetPercentage < 30) {
                                        percentageGradient = 'from-red-700 to-yellow-700'
                                    } else if (targetPercentage < 60) {
                                        percentageGradient =
                                            'from-red-700 via-orange-400 to-yellow-700'
                                    } else if (targetPercentage < 100) {
                                        percentageGradient =
                                            'from-red-700 via-orange-400 to-green-700'
                                    }

                                    return (
                                        <div
                                            className={`mb-6 mr-2 flex flex-col items-center justify-center max-lg:mb-16 md:mr-5 ${index !== 2 ? 'lg:mr-10' : ''}`}
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
                                                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                                                <div className='lightning-container relative'>
                                                    <div
                                                        // eslint-disable-next-line tailwindcss/no-custom-classname
                                                        className={`lightning absolute bottom-0 w-full   border  bg-gradient-to-t ${percentageGradient} delay-150 duration-200`}
                                                        style={{ height: `${targetPercentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <h4 className='text-center font-semi-bold text-lg'>
                                                {leader.name}
                                            </h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
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
