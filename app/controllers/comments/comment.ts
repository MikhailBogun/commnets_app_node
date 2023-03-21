import { RequestHandler, response } from 'express';

import db from '../../models';
import sequelize from 'sequelize';




  export const getTwits:RequestHandler =  async (req,res,next) => {
        try{
            let query = req.query || "";
            let twits_array = await db.Twit.getTwits('',0,25);
            let counts = await db.Twit.count();
            res.json({"twits":twits_array,"counts":counts});
        } catch(e){
            next(e);
        }
    }