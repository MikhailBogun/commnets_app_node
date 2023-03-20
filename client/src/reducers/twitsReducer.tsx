import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const SET_REPOS = "SET_REPOS";
const SET_IS_FEATCHIN = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


interface TwitAction {
  type: string
  payload: TwitState
}


interface Twit {
  id: number;
  text: string;
  userId: number;
  image: string;
  file: string;
  count_messages: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface TwitState {
  items: Twit[],
  isFetching: boolean,
  currentPage: number,
  perPage: number,
  total_count: number
}

const defaultState:TwitState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    total_count:0
}

export default function twitsReducer(state=defaultState, action: TwitAction)  {

        switch (action.type) {
            case SET_REPOS:
                return {
                    ...state,
                    items: action.payload.items,
                    totalCount: action.payload.total_count,
                    isFetching: false
                }
            case SET_IS_FEATCHIN:
                return{
                    ...state,
                    isFetching: action.payload
                }
            case SET_CURRENT_PAGE:
                return{
                    ...state,
                    currentPage: action.payload
                }
            default:
                return state
        }

}


export const setTwits = (repos:string) => ({type:SET_REPOS, payload:repos});
export const setFetching = (bool:boolean) => ({type:SET_IS_FEATCHIN, payload:bool});
export const setCurrentPage = (page:number) => ({type:SET_CURRENT_PAGE, payload:page});
