import axios from "axios";
import { setFetching, setTwits } from "../reducers/twitsReducer";


const server: string = "localost:" + process.env.PORT;


export const getTwits = (searchQuery:any = "", currentPage:number, perPage:number) => {
  const head = {
    method: 'get',
    url: 'http://${server}/comments',
    headers: { 'Content-Type': 'application/json' },
    data: {
      page: currentPage,
      per_page: perPage,
      query: searchQuery
    }
  };
  if(searchQuery ===""){
      searchQuery ="stars:%3E1";
  };
  return async (dispatch:any) => { 
          dispatch(setFetching(true));
          const response = await axios(head);
          dispatch(setTwits(response.data));
  }
}
