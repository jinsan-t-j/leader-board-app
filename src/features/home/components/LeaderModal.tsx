import type { FC } from "react"
import { useEffect, useState } from "react"
import type { Styles } from "react-modal"
import Modal from "react-modal"
import { Avatar } from "flowbite-react"

import confetti from "../../../assets/images/confetti.png"
import type { ILeader } from "../entity/Leader"
import { useAppSelector } from "../../../store"
import ".././../../assets/sass/features/home/_leaderModal.scss"

Modal.setAppElement("#root")

/**
 * The Leader modal component
 *
 * @returns The JSX.
 */
export const LeaderModal: FC = () => {
  const [topLeader, setTopLeader] = useState<ILeader>()
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isConfettiVisible, setIsConfettiVisible] = useState<boolean>(false)

  const leaders = useAppSelector(store => store.leaders)

  const avatarTheme = {
    root: {
      bordered: "ring-2 p-1",
      color: {
        yellow: "ring-yellow-700",
      },
      img: {
        base: "avatar-image rounded ring-4 ring-black",
      },
    },
  }

  const customStyles: Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      position: "absolute",
      inset: "",
      transform: "translate(-50%, 50%)",
      width: "450px",
      height: "300px",
      borderRadius: "53px",
      border: "1px solid #ccc",
      background: "#fff",
      padding: "20px",
      outline: "none",
      overflow: "hidden",
      WebkitOverflowScrolling: "touch",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }

  useEffect(() => {
    setTopLeader(leaders?.[0])
  }, [leaders])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsConfettiVisible(true)
      }, 700) // This should match the modal's transition time
    } else {
      setIsConfettiVisible(false)
    }
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      closeTimeoutMS={700}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
    >
      <style>
        {`
          @keyframes popup {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.21);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-popup {
            animation: popup 0.5s ease-in-out forwards;
          }
        `}
      </style>
      {isConfettiVisible && (
        <div className=" absolute top-[-20px] translate-x-full animate-popup">
          <img src={confetti} alt="The confetti" />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <div className="m-auto w-1/2">
          <Avatar
            img={topLeader?.avatar}
            size="lg"
            color="black"
            bordered
            rounded
            theme={avatarTheme}
          />
        </div>
        <h3 className="text-center font-semi-bold text-2xl text-black">
          {topLeader?.name}
        </h3>
        <h2 className="text-center font-bold text-4xl text-green-700">
          Congratulations
        </h2>
      </div>
    </Modal>
  )
}
