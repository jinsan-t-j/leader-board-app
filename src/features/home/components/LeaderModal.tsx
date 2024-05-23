import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { Styles } from 'react-modal'
import Modal from 'react-modal'

import donut from '../../../assets/images/donut.png'
import confetti from '../../../assets/images/confetti.png'
import type { ILeader } from '../entity/Leader'
import { useAppSelector } from '../../../store'

import '.././../../assets/sass/features/home/_leaderModal.scss'

Modal.setAppElement('#root')

/**
 * The Leader modal component
 *
 * @returns The JSX.
 */
export const LeaderModal: FC = () => {
    const [topLeader, setTopLeader] = useState<ILeader>()
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const leaders = useAppSelector((store) => store.leaders)

    const customStyles: Styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
            position: 'absolute',
            inset: '',
            transform: 'translate(-50%, 50%)',
            width: '30%',
            height: '30%',
            borderRadius: '53px',
            border: '1px solid  #ccc',
            background: '#fff',
            padding: '20px',
            outline: 'none',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
        },
    }

    useEffect(() => {
        setTopLeader(leaders?.[0])
    }, [leaders])

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            closeTimeoutMS={700}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setIsOpen(false)}
        >
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
                <h2 className='text-center font-bold text-4xl text-green-700'>Congratulations</h2>
            </div>
        </Modal>
    )
}
