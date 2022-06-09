const express = require('express');
const router = express.Router();
const publisherController= require("../controllers/publisherController")
const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getPublisherData", publisherController.getPublisherData)

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorAndPublisherDetails", bookController.getBooksWithAuthorAndPublisherDetails)

router.put("/UpdateHardCover", publisherController.UpdateHardCover)

router.put("/updateBookPrice", bookController.updateBookPrice)

module.exports = router;