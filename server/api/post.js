const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  const posts = {
    imageUrl: '/',
    title: '첫 번째 게시글',
    date: new Date(),
  }
  return res.status(200).json(posts)
})

module.exports = router;