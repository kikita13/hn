import { Router } from "express";
import { getUrl } from "../consts/getUrl.mjs";

const router = Router();

router.get('/:username', async (req, res, next) => {
  const username = req.params.username;

  const response = await fetch(getUrl('users', username));

  const json = await response.json();

  res.json(json);
})

export default router;