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
  const isFetching = useSelector((state:any) => state.twits.isFetching);
  const currentPage:number = useSelector((state:any) => state.twits.currentPage);
  const totalCount:number = useSelector((state:any) => state.twits.count);
  const perPage:number = useSelector((state:any) => state.twits.perPage);

  const [searchValue, setSearchValue] = useState("");
  console.log(totalCount, perPage, currentPage)
  const pagesCount = Math.ceil(totalCount/perPage)
  const pages:number[] = []

  createPages(pages, pagesCount, currentPage)
  useEffect(()=>{
      dispatch(getTwits(searchValue,currentPage,perPage, 0) as any);
  }, [currentPage])

  function searchHandler(sort:number = 0){
    dispatch(setCurrentPage(1))
    dispatch(getTwits(searchValue,currentPage,perPage,sort) as any)
}

  return (
    <div >
      <div className="search">
          {/* <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" /> */}
          <button onClick={()=>{ searchHandler()}} className="search-button">CreateNewComment</button>
          <button onClick={()=>{ searchHandler(1)}} className="search-button">SorthLogin</button>
          <button onClick={()=>{ searchHandler(2)}} className="search-button">SortEmail</button>
          <button onClick={()=>{ searchHandler(3)}} className="search-button">SortData</button>
      </div>
      { 
      isFetching === false
      ?
      twits.map((twit:any) => 
          <Twit key={twit.id} twit={twit}/>
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