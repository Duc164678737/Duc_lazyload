import React from 'react'

const Table = ({data,columns}) => {
    // console.log(data);
    console.log(columns);
    
  return (
    
    <>
        <h2>List User</h2>
        <div className="table">
            <div className="searchTable">
                {/* {columns.map((column)=>(console.log(column.Header)))} */}
            </div>
            <div className="dataTable">

            </div>
        </div>
    </>
  )
}

export default Table