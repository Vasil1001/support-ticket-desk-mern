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
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// * Get single user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`http://localhost:5000/api/tickets/${ticketId}`, config)

  return response.data
}

// * Close single user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`http://localhost:5000/api/tickets/${ticketId}`, config)

  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
}

export default ticketService
