/* import axios from 'axios';

const API_URL = '/api/forms/'

//Create new form
const createForm = async (formData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, formData, config)

    return response.data
}

const formService = {
    createForm
}

export default formService; */