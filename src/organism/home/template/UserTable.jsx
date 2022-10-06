import React from 'react'
import Header from '../atoms/Header/Header'
import PreNext from '../organism/PreNext'
import TableUser from '../organism/TableUser'
import './index.scss'


const UserTable = () => {
  return (
    <>
        <Header/>
        <TableUser/>
        <PreNext/>
    </>
  )
}

export default UserTable