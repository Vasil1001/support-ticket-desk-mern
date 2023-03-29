import React from "react"
import { useSelector } from "react-redux"

export default function NoteItem({ note }) {
    const { user } = useSelector()
  return <div>NoteItem</div>
}
