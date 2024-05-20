import { useContext, type FC } from 'react'
import { Avatar, List } from 'flowbite-react'

import { SupabaseContext } from '../../../Provider/SupabaseContext'
import manager from '../../../assets/images/manager.webp'
import lightning from '../../../assets/images/lightning.png'
import topper from '../../../assets/images/topper.png'
import factoryBackground from '../../../assets/images/bg-factory.png'

const avatarTheme = {
    root: {
        bordered: 'p-1 ring-2',
        rounded: 'rounded-full',
        color: {
            dark: 'ring-gray-800 dark:ring-gray-800',
            failure: 'ring-red-500 dark:ring-red-700',
            gray: 'ring-yellow-700 dark:ring-gray-400',
            info: 'ring-cyan-400 dark:ring-cyan-800',
            light: 'ring-yellow-700 dark:ring-gray-500',
            purple: 'ring-purple-500 dark:ring-purple-600',
            success: 'ring-green-500 dark:ring-green-500',
            warning: 'ring-yellow-300 dark:ring-yellow-500',
            pink: 'ring-pink-500 dark:ring-pink-500',
        },
    },
}

/**
 * The home component.
 *
 * @returns The JSX.
 */
export const Home: FC = () => {
    return (
        <div className='flex max-h-screen justify-between'>
            <div className='flex w-3/5 flex-col justify-end'>
                <h2 className='mt-28 font-light text-4xl text-black'>Use your time wisely</h2>
                <h1 className='mb-16 font-light text-7xl text-black'>
                    You Are A <span className='font-extra-bold text-9xl'> Star </span>
                </h1>
                <div className='flex justify-start'>
                    <div className='mr-10 flex flex-col justify-center'>
                        <Avatar
                            img={manager}
                            rounded
                            bordered
                            size='lg'
                            theme={avatarTheme}
                            className='mb-8'
                        />
                        <div className='mb-4 rounded-2xl bg-black px-4 py-8'>
                            <img src={lightning} alt='something' />
                        </div>
                        <h4 className='text-center font-semi-bold text-lg'> Jennifer </h4>
                    </div>

                    <div className='mr-10 flex flex-col justify-center'>
                        <Avatar
                            img={manager}
                            rounded
                            bordered
                            size='lg'
                            theme={avatarTheme}
                            className='mb-8'
                        />
                        <div className='mb-4 rounded-2xl bg-black px-4 py-8'>
                            <img src={lightning} alt='something' />
                        </div>
                        <h4 className='text-center font-semi-bold text-lg'> Jennifer </h4>
                    </div>

                    <div className='mr-10 flex flex-col justify-center'>
                        <Avatar
                            img={manager}
                            rounded
                            bordered
                            size='lg'
                            theme={avatarTheme}
                            className='mb-8'
                        />
                        <div className='mb-4 rounded-2xl bg-black px-4 py-8'>
                            <img src={lightning} alt='something' />
                        </div>
                        <h4 className='text-center font-semi-bold text-lg'> Jennifer </h4>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex w-96 flex-col rounded-3xl bg-black p-6'>
                <h3 className='text-center font-extra-bold text-3xl text-yellow-700'>
                    Leader Board
                </h3>
                <h5 className='mb-2 text-center font-light text-lg text-white'>
                    Total Members - 50
                </h5>
                <p className='text-white'> Best Performer </p>
                <img
                    src={topper}
                    alt=' '
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                />

                <List unstyled className='max-w-md divide-y'>
                    <List.Item className='mb-1 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>

                    <List.Item className='mb-2 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>

                    <List.Item className='mb-2 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>

                    <List.Item className='mb-2 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>

                    <List.Item className='mb-2 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>

                    <List.Item className='mb-2 rounded-3xl bg-white p-2'>
                        <div className='flex items-center space-x-4'>
                            <Avatar
                                img={manager}
                                alt='Neil image'
                                rounded
                                bordered
                                size='md'
                                theme={avatarTheme}
                            />
                            <div className='min-w-0 flex-1'>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                                    Team K
                                </p>
                            </div>
                            <p className='inline-flex items-center bg-yellow-700 px-2.5 text-xs text-black'>
                                42
                            </p>
                        </div>
                    </List.Item>
                </List>
            </div>

            <div className='absolute bottom-0 left-0 -z-50'>
                <img src={factoryBackground} alt='' />
            </div>
        </div>
    )
}
