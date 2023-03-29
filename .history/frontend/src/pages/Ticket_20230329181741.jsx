import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getNotes } from "../features/notes/noteSlice"
import { getTicket, closeTicket } from "../features/tickets/ticketSlice"
import BackButton from "../components/BackButton"
import NoteItem from "../components/NoteItem"
import Spinner from "../components/Spinner"
import Modal from "react-modal"
import { FaPlus } from "react-icons/fa"
import { Card } from "@tremor/react"

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    opacity: '0'
  },
}
Modal.setAppElement("#root")

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)
  const { notes } = useSelector((state) => state.notes)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { ticketId } = useParams()

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success("Ticket closed!")
        navigate("/tickets")
      })
      .catch(toast.error)
  }
  // Open or close the modal
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const onNoteSubmit = (e) => {}
  const onSubmit = (e) => {}

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
    dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  if (!ticket) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  return (
    <div>
      <BackButton to="/tickets" />
      Ticket ID: {ticket._id}
      <span className={`status status-${ticket.status}`}>{ticket.status}</span>
      <div className="ticket-desc">
        <h3>Description of Issue</h3>
        <p>{ticket.description}</p>
        <p>{ticket.product}</p>
      </div>
      <div>
        {ticket.status !== "closed" && (
          <button
            className="flex p-2 px-4 items-center bg-black text-white rounded-md gap-2"
            onClick={openModal}
          >
            <FaPlus /> Add Note
          </button>
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Note"
        >
          <Card
            decoration="left"
            decorationColor="indigo"
            className="max-w-2xl mt-3 shadow-md"
          >
            <div className="grid grid-cols-3 gap-5 ">
              <div className="col-span-2">
                <h1 className="flex font-bold text-4xl gap-3">
                  Create a new ticket
                </h1>
                <p className="text-gray-600 text-lg">
                  Fill out details about your issue or bug
                </p>
                <button className="btn-close" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>
            <hr className="my-2 border-gray-400" />

            <form className="flex flex-col" onSubmit={onNoteSubmit}>
              <label htmlFor="product" className="block text-gray-800 mb-1">
                Product
              </label>

              <label className="block text-gray-800 mt-5 mb-1" htmlFor="name">
                Description
              </label>
              <textarea
                className="border-2 border-gray-600 p-2 rounded-md w-full"
                name="noteText"
                id="note"
                placeholder="Please describe your issue here"
                cols="10"
                rows="6"
              ></textarea>

              <button className="w-lg text-white px-3 p-2 border-2 border-slate-700 bg-green-700 rounded-md mt-3">
                Create
              </button>
            </form>
          </Card>
        </Modal>

        {notes ? (
          notes.map((note) => <NoteItem key={note._id} note={note} />)
        ) : (
          <Spinner />
        )}
      </div>
      <p>Date submitted: {new Date(ticket.createdAt).toDateString()}</p>
      {ticket.status !== "closed" && (
        <button
          className="w-full text-white px-3 p-2 mt-10 bg-indigo-700 rounded-md"
          onClick={onTicketClose}
        >
          Close Ticket
        </button>
      )}
    </div>
  )
}
