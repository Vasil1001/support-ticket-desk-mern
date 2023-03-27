import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = '/api/users'

// * Register user, pass userData which is email/password
const register = async (userData: any) => {
    const response = await axios.post('http://localhost:5000/api/users', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// * Login user, pass userData which is email/password
const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/users/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// * Logout user and clear local storage 
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login
}

export default authService