import React, { useEffect, useState } from 'react'
import Table from './Table'
import  {ApiTable } from './ApiTable'
import { getuser } from '../../api/table';
import { useParams } from 'react-router-dom';

const ColumsTable = () => {
    const [users, setUsers] = useState([]);
    const [totalPage, setTotalPage] = useState([])

    const {id} = useParams();
    const dataID = Number.parseInt(id);

    let arrayPage = [];
    let arrayKey = [];
    // let arrayName = ['ID','Avatar','First Name','Last Name','Email'];
    for (let i = 1; i<=totalPage; i++){
        arrayPage.push(i)
    }

    useEffect(() => {
        ApiTable();
      }, []);

    const ApiTable = async () => {
        try {
          const {data} = await getuser(1);
          // console.log(data);
          setUsers(data.data);
          setTotalPage(data.total_pages);
          return data.data;
        } catch (error) {
          console.error(error);
        }
      };

      for (const key in users[0]){
          arrayKey.push(key);
      }
    //   console.log(arrayKey);
      

    const columns = [
        { field: arrayKey[0], Header: "ID" },
        { field: arrayKey[1], Header: "Avatar" },
        { field: arrayKey[2], Header: "First Name" },
        { field: arrayKey[3], Header: "Last Name" },
        { field: arrayKey[4], Header: "Email" },
    ]

  return (
  
    <Table data={users} columns={columns}/>
  )
}

export default ColumsTable