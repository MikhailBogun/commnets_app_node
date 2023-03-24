import { RequestHandler, response } from 'express';

import db from '../../models';

export const getTwits: RequestHandler = async (req, res, next) => {
  try {
    let data:any = req.query || "";

    let query = {
      searchQuery: data.searchQuery,
      offset: (data.page - 1) * data.per_page,
      limit: data.per_page,
      sortType: data.sort_type && data.sort_type == 1 ? 'DESC' : "ASC",
      sortField: data.sort_field ? data.sort_field : 0
    }
    
    let twits_array = await db.Twit.getTwits(query);
    let counts = await db.Twit.count();
    res.json({ "twits": twits_array, "counts": counts });
  } catch (e) {
    next(e);
  }
}