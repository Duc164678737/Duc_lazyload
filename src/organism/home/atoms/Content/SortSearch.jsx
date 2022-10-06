import React from 'react'
import useGetUser from '../../hook/useGetUser'

const SortSearch = () => {
    const { handleChange, columns } = useGetUser()
  return (
    <div className="searchTable-sort">
        <span>Sort by </span>
            <select name="" id="" onChange={handleChange}>
            <option value='Default'>Default</option>
              {
                columns.map((col,index)=>(
                  <option key={index} value={col.field}>{col.Header}</option>
                ))
              }
              
            </select>
    </div>
  )
}

export default SortSearch