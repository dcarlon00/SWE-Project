

import axios from 'axios'

const API_URL = '/api/forms/'

// Create new goal
const createForm = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, formData, config)

  return response.data
}

// Get user goals
const getForms = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteForm= async (formId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + formId, config)

  return response.data
}

const formService = {
  createForm,
  getForms,
  deleteForm,
}

export default formService;