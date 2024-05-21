import { useState, type FC } from 'react'
import { Modal } from 'flowbite-react'

import donut from '../../../assets/images/donut.png'
import confetti from '../../../assets/images/confetti.png'

import { Board } from './Board'
import { Landing } from './Landing'

/**
 * The home component.
 *
 * @returns The JSX.
 */
export const Home: FC = () => {
    const [openModal, setOpenModal] = useState(true)

    const modalTheme = {
        content: {
            inner: 'relative flex max-h-[90dvh] flex-col rounded-[50px] bg-white shadow',
        },
    }

    return (
        <>
            <Landing />
            <Board />

            <Modal
                show={openModal}
                onClick={() => setOpenModal(false)}
                theme={modalTheme}
                className='focus-visible:!outline-none'
            >
                <Modal.Body className='relative py-16 focus-visible:!outline-none'>
                    <div className='absolute top-0 translate-x-full'>
                        <img src={confetti} alt='The confetti' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='m-auto w-1/4'>
                            <img src={donut} alt='The donut' />
                        </div>
                        <h3 className='text-center font-semi-bold text-2xl text-black'>
                            Simon George
                        </h3>
                        <h2 className='text-center font-bold text-4xl text-green-700'>
                            Congratulations
                        </h2>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
