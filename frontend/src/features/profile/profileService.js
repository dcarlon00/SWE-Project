import axios from 'axios'

const API_URL = '/api/profile/'

// Create new profile
const createProfile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, profileData, config)

  return response.data
}

// Update user profile
const updateProfile = async (profileId, profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + profileId, profileData, config)

  return response.data
}

// Get user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user profile
const deleteProfile= async (profileId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + profileId, config)

  return response.data
}

const profileService = {
  createProfile,
  updateProfile,
  getProfile,
  deleteProfile,
}

export default profileService;
