import axios from "axios";
import { setFetching, setTwits } from "../reducers/twitsReducer";

const server: string = "localost:3000";

export const getTwits = (searchQuery:any = "", currentPage:number, perPage:number, sort: number) => {
  const head = {
    method: 'get',
    url: 'http://127.0.0.1:3000/comments',
    headers: { 'Content-Type': 'application/json' },
    params: {
      page: currentPage,
      per_page: perPage,
      searchQuery: searchQuery,
      sort_field: sort
    }
  };
  return async (dispatch:any) => { 
          dispatch(setFetching(true));
          const response = await axios(head);
          console.log(response.data)
          dispatch(setTwits(response.data));
  }
}
