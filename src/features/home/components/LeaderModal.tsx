import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Modal } from 'flowbite-react'

import donut from '../../../assets/images/donut.png'
import confetti from '../../../assets/images/confetti.png'
import type { ILeader } from '../entity/Leader'
import { useAppSelector } from '../../../store'

interface ILeaderModalProps {
    isEnabled: boolean
}

/**
 * The Leader modal component
 *
 * @returns The JSX.
 */
export const LeaderModal: FC<ILeaderModalProps> = ({ isEnabled }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalTheme, setModalTheme] = useState({})

    const [topLeader, setTopLeader] = useState<ILeader>()

    const leaders = useAppSelector((store) => store.leaders)

    const initialData = () => {
        const modalTheme = {
            content: {
                base: `absolute h-full w-full p-4 md:h-auto duration-700 delay-1000 duration-1000 focus-visible:outline-none`,
                inner: 'relative flex max-h-[90dvh] flex-col rounded-[50px] bg-white shadow',
            },
        }

        setModalTheme(modalTheme)
        setOpenModal(isEnabled)
        setTopLeader(leaders?.[0])
    }

    useEffect(() => {
        initialData()
    }, [isEnabled, leaders])

    return (
        <Modal show={openModal} onClick={() => setOpenModal(false)} theme={modalTheme}>
            <Modal.Body className='relative py-16'>
                <div className='absolute top-0 translate-x-full'>
                    <img src={confetti} alt='The confetti' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='m-auto w-1/4'>
                        <img src={donut} alt='The donut' />
                    </div>
                    <h3 className='text-center font-semi-bold text-2xl text-black'>
                        {topLeader?.name}
                    </h3>
                    <h2 className='text-center font-bold text-4xl text-green-700'>
                        Congratulations
                    </h2>
                </div>
            </Modal.Body>
        </Modal>
    )
}
