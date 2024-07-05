'use client'
import React,{useEffect, useState} from 'react'
import { useAppSelector } from "../../redux/hooks"
import ReactPaginate from "react-paginate";
import RegisterersList from './RegisterersList';
import RegisterersLoading from './RegistersLoading';
import useFetch from '../../hooks/useFetch';


interface RegistererPaginatorProps {
    d: any
}

export default function RegistererPaginator({path}: any) {
    const {data, loading, error} = useFetch(path)


    if (loading) return <RegisterersLoading />
    if (error) return <div>{error}</div>

    return (
        <Paginator d={data} />
    )
}


const Paginator = ({d}: RegistererPaginatorProps) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    const itemsPerPage = 12;
    const data = d
    // console.log(data)
  
    useEffect(() => {
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
      
  
    }, [itemOffset, itemsPerPage]);
  
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
  
  
    return (
      <>
          <RegisterersList d={currentItems} />
  
          <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              // renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"pagination__page"}
              activeClassName={"pagination__pageActive"}
              previousClassName={"pagination__pagePrev"}
              nextClassName={"pagination__pageNext"}
          />
        </>
      )
  }