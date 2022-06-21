const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("New User Form")
})

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete Use with ID ${req.params.id}`)
  })

module.exports = router

