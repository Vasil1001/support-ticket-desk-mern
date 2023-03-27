import React from "react"
import axios from "axios"

const API_URL = "http://localhost:5000/api/tickets"

// * Create a new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ticketData, config)

  return response.data
}

// * Get user tickets
const getTickets = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ticketData, config)

  return response.data
}

const ticketService = {
  createTicket,
}

export default ticketService
