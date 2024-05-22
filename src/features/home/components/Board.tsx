import { Avatar, List } from 'flowbite-react'
import { useEffect, useState, type FC } from 'react'

import leaderBoard from '../../../assets/images/leader-board.svg'
import { AvatarThemeConstant } from '../home.constants'
import { Battery } from '../../../shared/components/ui/Battery'
import { useAppSelector } from '../../../store'
import type { ILeader } from '../entity/Leader'

/**
 * The board component.
 *
 * @returns The JSX.
 */
export const Board: FC = () => {
    const [leaders, setLeaders] = useState<ILeader[]>()
    const [topThreeLeaders, setTopThreeLeaders] = useState<ILeader[]>([])

    const data = useAppSelector((store) => store.leaders)

    const initialData = () => {
        if (data) {
            setLeaders(data)

            const topLeaders = data?.slice(0, 3)

            let draft = []
            if (topLeaders[1]) {
                draft = [topLeaders[1], topLeaders[0]]
                if (topLeaders[2]) {
                    draft.push(topLeaders[2])
                }
            } else {
                draft = [topLeaders[0]]
            }
            setTopThreeLeaders(draft)
        }
    }

    useEffect(() => {
        initialData()
    }, [data])

    return (
        <div className='mb-2 mt-8 flex max-lg:m-auto max-lg:mx-4 lg:w-2/5 '>
            <div className='w-full shrink-0 grow-0 flex-col rounded-3xl bg-black p-3 md:w-3/4 max-lg:mx-auto'>
                <h3 className='text-center font-extra-bold text-2xl text-yellow-700 lg:text-3xl'>
                    Leader Board
                </h3>
                <h5 className='mb-2 text-center font-light text-base text-white lg:text-lg'>
                    Total Members - <span className='font-bold'> {leaders?.length} </span>
                </h5>
                <p className='font-bold text-base text-white'> Best Performers </p>

                <div className='m-auto -ml-8 flex items-end justify-center'>
                    {topThreeLeaders?.map((topLeader, index) => {
                        let size = 'md'
                        let margin = '-mb-28'

                        if (index === 0) {
                            size = 'lg'
                            margin = '-mb-16'
                        } else if (index === 1) {
                            size = 'xl'
                            margin = '-mb-6'
                        }
                        return (
                            <div
                                className={`flex flex-col items-center ${index === 1 ? 'self-start' : ''} ${margin}`}
                                key={topLeader.uuid}
                            >
                                <Battery value={topLeader.achieved_target} className='mb-2.5' />

                                <Avatar
                                    img={topLeader.avatar}
                                    alt='Neil image'
                                    rounded
                                    bordered
                                    size={size}
                                    theme={AvatarThemeConstant}
                                    color='white'
                                    className='mb-2 cursor-pointer'
                                />

                                <h3 className='font-bold text-base text-white'>{topLeader.name}</h3>
                            </div>
                        )
                    })}
                </div>

                <div className='mb-2 self-end'>
                    <img
                        src={leaderBoard}
                        alt='leader-board'
                        className='m-auto'
                        draggable='false'
                    />
                </div>

                <List unstyled className='max-h-80 min-h-[366px] divide-y overflow-y-scroll'>
                    {leaders?.map((leader) => (
                        <List.Item
                            className='!m-0 !mx-4 !mb-1 cursor-pointer rounded-xl bg-gray-300 px-6 py-3 duration-200 hover:!mb-0 hover:scale-105 hover:bg-white'
                            key={leader.uuid}
                        >
                            <div className='flex cursor-pointer items-center space-x-4'>
                                <Avatar
                                    img={leader.avatar}
                                    alt='The leader'
                                    rounded
                                    bordered
                                    size='md'
                                    theme={AvatarThemeConstant}
                                    color='yellow'
                                    className='cursor-pointer'
                                />
                                <div className='min-w-0 flex-1'>
                                    <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                        {leader.name}
                                    </p>
                                    <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                        {leader.team_name}
                                    </p>
                                </div>
                                <Battery value={leader.achieved_target} />
                            </div>
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )
}
