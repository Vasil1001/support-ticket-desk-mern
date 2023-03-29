import axios from "axios"

const API_URL = "http://localhost:5000/api/tickets/"

// * Get single user ticket
const getTicket = async (ticketId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }