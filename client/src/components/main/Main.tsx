import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTwits } from "../../actions/twits";
import Twit from "../../reducers/twit/Twit";
import { setCurrentPage } from "../../reducers/twitsReducer";
import { createPages } from "../../utils/pagesCreator";



const Main = () =>{

  const dispatch = useDispatch();
  const twits = useSelector((state:any) => state.twits.items);
  const isFetching = useSelector((state:any) => state.repos.isFetching);
  const currentPage:number = useSelector((state:any) => state.repos.currentPage);
  const totalCount:number = useSelector((state:any) => state.repos.totalCount);
  const perPage:number = useSelector((state:any) => state.repos.perPage);

  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount/perPage)
  const pages:number[] = []

  createPages(pages, pagesCount, currentPage)
  useEffect(()=>{
      dispatch(getTwits(searchValue,currentPage,perPage) as any);
  }, [currentPage])
  function searchHandler(){
    dispatch(setCurrentPage(1))
    dispatch(getTwits(searchValue,currentPage,perPage) as any)
}

  return (
    <div >
      <div className="search">
          <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
          <button onClick={()=>{ searchHandler()}} className="search-button">Search</button>
      </div>
      { 
      isFetching === false
      ?
      twits.map((twit:any) => 
          <Twit key={twit.id} repo={twit}/>
      ) 
      :
      <div className="fetching"> </div>

  }

  <div className="pages">
      { pages.map((page,index) => <span 
      key={index} 
      className={currentPage == page ? "current-page" : "page"}
      onClick={() => dispatch(setCurrentPage(page))}>{page}</span> )}
  </div>
</div>
  )
}

export default Main;