import { Avatar, List } from 'flowbite-react'
import { type FC } from 'react'

import manager from '../../../assets/images/manager.webp'
import leaderBoard from '../../../assets/images/leader-board.svg'
import { AvatarThemeConstant } from '../home.constants'
import { Battery } from '../../../shared/components/ui/Battery'

/**
 * The board component.
 *
 * @returns The JSX.
 */
export const Board: FC = () => {
    return (
        <div className='mt-8 flex w-full md:w-2/5'>
            <div className='w-full shrink-0 grow-0 flex-col rounded-3xl bg-black p-3 md:w-3/4'>
                <h3 className='text-center font-extra-bold text-2xl text-yellow-700 lg:text-3xl'>
                    Leader Board
                </h3>
                <h5 className='mb-2 text-center font-light text-base text-white lg:text-lg'>
                    Total Members - <span className='font-bold'> 50 </span>
                </h5>
                <p className='font-bold text-base text-white'> Best Performers </p>

                <div className='m-auto -ml-8 flex items-end justify-center'>
                    {[0, 1, 2].map((x, index) => {
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
                                key={x}
                            >
                                <Battery value={44} className='mb-2.5' />

                                <Avatar
                                    img={manager}
                                    alt='Neil image'
                                    rounded
                                    bordered
                                    size={size}
                                    theme={AvatarThemeConstant}
                                    color='white'
                                    className='cursor-pointer'
                                />

                                <h3 className='font-bold text-base text-white'>Lora Paul</h3>
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
                    {[0, 1, 2, 3, 4, 5].map((x) => (
                        <List.Item
                            className='!m-0 !mx-4 !mb-1 cursor-pointer rounded-xl bg-gray-300 px-6 py-3 duration-200 hover:!mb-0 hover:scale-105 hover:bg-white'
                            key={x}
                        >
                            <div className='flex cursor-pointer items-center space-x-4'>
                                <Avatar
                                    img={manager}
                                    alt='Neil image'
                                    rounded
                                    bordered
                                    size='md'
                                    theme={AvatarThemeConstant}
                                    color='yellow'
                                    className='cursor-pointer'
                                />
                                <div className='min-w-0 flex-1'>
                                    <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                        Neil Sims
                                    </p>
                                    <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                        Team K
                                    </p>
                                </div>
                                <Battery value={44} />
                            </div>
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )
}
