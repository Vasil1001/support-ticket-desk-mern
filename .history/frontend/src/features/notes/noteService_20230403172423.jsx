import axios from "axios"

const API_URL = "http://localhost:5000/api/tickets/"

// * Get single user ticket
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(
    `http://localhost:5000/api/tickets/${ticketId}/notes`,
    config
  )

  return response.data
}

// * Create a new note for selected ticket
const createNote !== async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    `http://localhost:5000/api/tickets/${ticketId}/notes`,
    { text: noteText },
    config
  )

  return response.data
}

const noteService = {
  getNotes,
  createNote
}

export default noteService
