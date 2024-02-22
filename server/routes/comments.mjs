import { Router } from "express";

const router = Router();

router.get('/:storyId', async (req, res, next) => {
  const storyId = req.params.storyId;

  const response = await fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${storyId}`);

  const json = await response.json();

  res.json(json);
})

export default router;