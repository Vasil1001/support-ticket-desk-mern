import React from "react"
import axios from "axios";

const API_URL = 'http://localhost:5000/api/tickets'


// * Create a new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  
}

