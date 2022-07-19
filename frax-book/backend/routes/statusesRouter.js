const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const StatusModel = require('../models/statusSchema')


//* ======== Create Router ========
const router = express.Router()


//* ======== GET =======
router.get('/', authMiddleware, async (req, res) => {
    try {
        const statuses = await StatusModel.find()
        res.status(200).json(statuses)
    } catch (error) {
        console.log(error);
    }
})

//* ======= CREATE =======
router.post('/', authMiddleware, async (req, res) => {
    const statusData = req.body
    statusData.user = req.user.id
    console.log(statusData);
    try {
        const status = await StatusModel.create(statusData) // creates the status in DB
        //send back the response 
        res.status(201).json(status)
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad request!!!')
    }
})

//* ======= GET BY ID ========
router.get('/:id', authMiddleware, async (req,res) => {
    const id = req.params.id

    try {
        const findStatus = await StatusModel.findById(id)
        res.status(200).json(findStatus)
    } catch (error) {
        console.log(error);
    }
})


//* ======== UPDATE BY ID ========
router.put('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    const newStatusData = req.body
    try {
        // find the status by id 
        const findStatus = await StatusModel.findByIdAndUpdate(id, newStatusData, {new:true})
        res.status(202).json(findStatus)
    } catch (error) {
        console.log(error);
    }
})

//! ======== DELETE ==========
router.delete('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id

    try {
       await StatusModel.findByIdAndDelete(id)

        res.status(200).json('deleted')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router 