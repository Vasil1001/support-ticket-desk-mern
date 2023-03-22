import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = '/api/users'

// register user, pass userData which is email/password
const register = async (userData) => {
    const response = await axios.post('API_URL', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register
}

export default authService