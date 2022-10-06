import React from 'react'
import { Link } from 'react-router-dom'
import useGetUser from '../hook/useGetUser'


const PreNext = () => {
    const {handlePre,totalPage,dataID,id,arrayPage} = useGetUser()
    
  return (
    <div className="pagination">

        <Link to={`/table/${id-1}`} >
          <button className="paginationBtn" disabled={id==1} onClick={() =>handlePre(id-1)}>
            Previous
          </button>
          </Link>

          {arrayPage.map((total,index)=>(
            <Link to={`/table/${index+1}`} key={index}>
            <button key={index} onClick={() =>handlePre(total)} className="paginationBtn">
            {total}
          </button>
          </Link>
          ))}

          <Link to={`/table/${dataID+1}`} >
          <button className="paginationBtn" disabled={dataID==totalPage} onClick={() =>handlePre(dataID+1)}>
            Next
          </button>
          </Link>
        </div>
  )
}

export default PreNext