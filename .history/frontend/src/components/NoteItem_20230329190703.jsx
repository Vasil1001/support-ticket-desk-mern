import React from "react"
import { useSelector } from "react-redux"

export default function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div
      className="border border-gray-700 bg-transparent rounded-lg p-4"
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0,7)" : "#d1d1dd",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
      <h1 className="font-bold">Note from {note.isStaff ? "Staff" : <span>{user.name}</span>}</h1>
      <p className="text-md text-gray-800">{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleString("en-US")}
      </div>
    </div>
  )
}
