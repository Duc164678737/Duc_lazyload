import React from 'react'
import ContentSearch from '../molecule/ContentSearch'
import ContentTable from '../molecule/ContentTable'

const TableUser = () => {
  return (
    <div className="table">
        <ContentSearch/>
        <ContentTable/>
    </div>
  )
}

export default TableUser