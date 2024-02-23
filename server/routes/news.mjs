import { Router } from "express";

const router = Router();

router.get('/:page', async (req, res, next) => {
  const page = req.params.page;

  const response = await fetch(`http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10&page=${page}`);

  const json = await response.json();

  res.json(json);
})

router.get('/id/:id', async (req, res, next) => {
  const id = req.params.id;

  const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);

  const json = await response.json();

  res.json(json);
})

export default router;