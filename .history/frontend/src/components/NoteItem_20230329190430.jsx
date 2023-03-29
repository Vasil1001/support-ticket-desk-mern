import React from "react"
import { useSelector } from "react-redux"

export default function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div
      className="note border border-gray-300 rounded-lg p-4"
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0,7)" : "#d8d9dd",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
      <h1>Note from {note.isStaff ? "Staff" : <span><b></b>{user.name}</span>}</h1>
      <p>{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleString("en-US")}
      </div>
    </div>
  )
}
