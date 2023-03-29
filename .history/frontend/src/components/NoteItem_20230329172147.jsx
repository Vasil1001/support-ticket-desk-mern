import React from "react"
import { useSelector } from "react-redux"

export default function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0,7)" : "#fff",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
        <h1>Note from {note.isStaff ? "Staff" : s{user.name}'}</h1>
    </div>
  )
}
