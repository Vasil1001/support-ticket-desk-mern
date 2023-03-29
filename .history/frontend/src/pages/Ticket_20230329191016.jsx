import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getNotes, createNote } from "../features/notes/noteSlice"
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
    border: "2px solid gray",
    borderRadius: "10px",
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

  const onNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote({ noteText, ticketId }))
      .unwrap()
      .then(() => {
        setNoteText("")
        closeModal()
      })
      .catch(toast.error)
  }

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
      <div className="flex justify-between p-1 mt-10">
        <div className="text-xl font-bold">Product: {ticket.product}</div>
        <p>Date submitted: {new Date(ticket.createdAt).toDateString()}</p>
      </div>

      <div className="flex flex-col p-3 border border-gray-400 bg-gray-200 rounded-md">
        <div className="flex justify-between">
          <h3 className="font-bold">Description of Issue</h3>
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </div>

        <p>{ticket.description}</p>
        <p className="mt-3 text-sm text-gray-600">Ticket ID: {ticket._id}</p>
      </div>

      <div>
        <div className="flex justify-between mt-5">
          <h1 className="flex ml-1 mb-2 items-end font-bold text-2xl">Notes</h1>
          {ticket.status !== "closed" && (
            <button
              className="flex p-2 px-4 mb-2 items-center bg-black text-white rounded-md gap-2"
              onClick={openModal}
            >
              <FaPlus /> Add Note
            </button>
          )}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Note"
        >
          <div className="max-w-2xl mt-0">
            <div className="grid grid-cols-3 gap-5 ">
              <div className="col-span-2">
                <h1 className="flex font-bold text-4xl gap-3">
                  Add a new note
                </h1>
                <p className="text-gray-600 text-lg ml-1">
                  Fill out details about your issue or bug
                </p>
                <button className="btn-close" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>

            <form className="flex flex-col" onSubmit={onNoteSubmit}>
              <textarea
                className="border-2 border-gray-600 p-2 rounded-md mt-2 w-full"
                name="noteText"
                id="noteText"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a comment or note"
                cols="10"
                rows="6"
              ></textarea>

              <button
                type="submit "
                className="w-lg text-white px-3 p-2 border-2 border-slate-700 bg-green-700 rounded-md mt-3"
              >
                Add Note
              </button>
            </form>
          </div>
        </Modal>

        {notes ? (
          notes.map((note) => <NoteItem key={note._id} note={note} />)
        ) : (
          <Spinner />
        )}
      </div>
      {ticket.status !== "closed" && (
        <button
          className="w-full text-white px-3 p-2 mt-5 bg-indigo-700 rounded-md"
          onClick={onTicketClose}
        >
          Close Ticket
        </button>
      )}
    </div>
  )
}
