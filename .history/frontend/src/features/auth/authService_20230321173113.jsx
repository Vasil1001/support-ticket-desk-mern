import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = '/api/users'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
}