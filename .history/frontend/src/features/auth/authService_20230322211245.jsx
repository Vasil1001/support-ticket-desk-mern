import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = '/api/users'

// ? Register user, pass userData which is email/password
const register = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/users', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register
}

export default authService