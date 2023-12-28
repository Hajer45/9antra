const express = require('express')
const {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
} = require('../controllers/courseController')

const router = express.Router()

// GET all coursess
router.get('/', getCourses)

// GET a single workout
router.get('/:id', getCourse)

// POST a new workout
router.post('/',  createCourse)

// DELETE a workout
router.delete('/:id', deleteCourse)

// UPDATE a workout
router.patch('/:id', updateCourse)

module.exports = router