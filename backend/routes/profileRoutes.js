const express = require('express')
const router = express.Router()
const { getProfile, setProfile, updateProfile, deleteProfile} = require('../controllers/profileController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getProfile).post(protect, setProfile)
router.route('/:id').delete(protect, deleteProfile).put(protect, updateProfile)

module.exports = router